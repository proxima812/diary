import http from "k6/http";
import { check, group, sleep } from "k6";
import { Rate, Trend } from "k6/metrics";

const BASE_URL = (__ENV.BASE_URL || "http://localhost:4321").replace(/\/+$/, "");
const VUS = Number(__ENV.VUS || 100);
const DURATION = __ENV.DURATION || "8m";
const CACHE_MODE = (__ENV.CACHE_MODE || "edge").toLowerCase(); // edge | bypass

const staticPaths = [
	"/",
	"/aa",
	"/an",
	"/aa24",
	"/aadays",
	"/alanon",
	"/alanonmm",
	"/calendar",
	"/calendar/aa",
	"/calendar/an",
	"/calendar/aa24",
	"/calendar/aadays",
	"/calendar/alanon",
	"/calendar/alanonmm",
	"/bookmarks",
	"/privacy",
	"/terms",
	"/disclaimer",
];

const noStorePaths = [
	"/aa/now",
	"/an/now",
	"/aa24/now",
	"/aadays/now",
	"/alanon/now",
	"/alanonmm/now",
];

const cacheHitRate = new Rate("cache_hit_rate");
const cacheMissRate = new Rate("cache_miss_rate");
const throttledRate = new Rate("throttled_rate");
const serverErrorRate = new Rate("server_error_rate");
const htmlDuration = new Trend("html_duration", true);

const thresholds = {
	http_req_failed: ["rate<0.02"],
	http_req_duration: ["p(95)<1800", "p(99)<3200"],
	throttled_rate: ["rate<0.03"],
	server_error_rate: ["rate<0.01"],
	html_duration: ["p(95)<1700"],
};

if (CACHE_MODE !== "bypass") {
	thresholds.cache_hit_rate = ["rate>0.35"];
}

export const options = {
	discardResponseBodies: true,
	thresholds,
	scenarios: {
		warm_cache: {
			executor: "constant-vus",
			vus: Math.min(25, Math.max(5, Math.floor(VUS / 4))),
			duration: "2m",
			exec: "warmCache",
		},
		tabs_traffic_100: {
			executor: "constant-vus",
			vus: VUS,
			duration: DURATION,
			startTime: "2m",
			exec: "tabsTraffic",
		},
	},
};

function withBase(path) {
	return `${BASE_URL}${path}`;
}

function withCacheMode(path, hopId) {
	if (CACHE_MODE !== "bypass") return withBase(path);
	const sep = path.includes("?") ? "&" : "?";
	return withBase(`${path}${sep}cb=${__VU}-${__ITER}-${hopId}`);
}

function pick(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function extractAstroAssets(html) {
	const found = new Set();
	const re = /(?:href|src)=["'](\/_astro\/[^"']+\.(?:js|css))["']/g;
	for (let m = re.exec(html); m; m = re.exec(html)) {
		found.add(m[1]);
		if (found.size >= 24) break;
	}
	return [...found];
}

function headerValue(res, name) {
	const direct = res.headers[name] || res.headers[name.toLowerCase()] || res.headers[name.toUpperCase()];
	if (!direct) return "";
	if (Array.isArray(direct)) return String(direct[0] || "");
	return String(direct);
}

function recordResponseMetrics(res, isHtml) {
	throttledRate.add(res.status === 429);
	serverErrorRate.add(res.status >= 500);

	const xVercelCache = headerValue(res, "x-vercel-cache").toUpperCase();
	if (xVercelCache) {
		cacheHitRate.add(xVercelCache.includes("HIT") || xVercelCache.includes("STALE"));
		cacheMissRate.add(xVercelCache.includes("MISS") || xVercelCache.includes("BYPASS"));
	}

	if (isHtml) {
		htmlDuration.add(res.timings.duration);
	}
}

export function setup() {
	const assets = new Set();
	for (const path of ["/", "/aa", "/calendar/aa"]) {
		const res = http.get(withBase(path), {
			tags: { scenario_phase: "setup", kind: "html", path },
		});
		if (res.status === 200 && res.body) {
			for (const asset of extractAstroAssets(res.body)) assets.add(asset);
		}
	}
	return { assets: [...assets] };
}

export function warmCache(data) {
	const pages = [...staticPaths, ...noStorePaths];
	for (let i = 0; i < pages.length; i++) {
		const path = pages[i];
		const res = http.get(withCacheMode(path, i), {
			headers:
				CACHE_MODE === "bypass"
					? { "Cache-Control": "no-cache", Pragma: "no-cache" }
					: undefined,
			tags: { scenario_phase: "warm", kind: "html", path },
		});
		recordResponseMetrics(res, true);
		check(res, { "warm: status 200/304": r => r.status === 200 || r.status === 304 });
		sleep(0.15 + Math.random() * 0.35);
	}

	if (data.assets?.length) {
		for (const asset of data.assets.slice(0, 6)) {
			const res = http.get(withCacheMode(asset, asset.length), {
				tags: { scenario_phase: "warm", kind: "asset", path: asset },
			});
			recordResponseMetrics(res, false);
			check(res, { "warm asset: status 200/304": r => r.status === 200 || r.status === 304 });
		}
	}
}

export function tabsTraffic(data) {
	group("user-jumps-between-tabs", () => {
		const hops = 4 + Math.floor(Math.random() * 5);
		let previousPath = pick(staticPaths);

		for (let hop = 0; hop < hops; hop++) {
			const useNoStore = Math.random() < 0.22;
			const path = useNoStore ? pick(noStorePaths) : pick(staticPaths);
			const res = http.get(withCacheMode(path, hop), {
				headers:
					CACHE_MODE === "bypass"
						? { "Cache-Control": "no-cache", Pragma: "no-cache" }
						: undefined,
				tags: { scenario_phase: "main", kind: "html", path, cache_mode: CACHE_MODE },
			});

			recordResponseMetrics(res, true);
			check(res, {
				"main: html status 200/304": r => r.status === 200 || r.status === 304,
				"main: no throttle": r => r.status !== 429,
			});

			// Simulate opening a static asset after tab switch.
			if (data.assets?.length && Math.random() < 0.35) {
				const asset = pick(data.assets);
				const assetRes = http.get(withCacheMode(asset, hop + 100), {
					tags: { scenario_phase: "main", kind: "asset", path: asset, cache_mode: CACHE_MODE },
				});
				recordResponseMetrics(assetRes, false);
				check(assetRes, { "asset: status 200/304": r => r.status === 200 || r.status === 304 });
			}

			// Simulate "back" behavior: users often jump to previous tab/page.
			if (Math.random() < 0.30) {
				const backRes = http.get(withCacheMode(previousPath, hop + 200), {
					headers:
						CACHE_MODE === "bypass"
							? { "Cache-Control": "no-cache", Pragma: "no-cache" }
							: undefined,
					tags: { scenario_phase: "main", kind: "html", path: previousPath, cache_mode: CACHE_MODE },
				});
				recordResponseMetrics(backRes, true);
				check(backRes, { "back: status 200/304": r => r.status === 200 || r.status === 304 });
			}

			previousPath = path;
			sleep(0.4 + Math.random() * 1.6);
		}
	});
}

