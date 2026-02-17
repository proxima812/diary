import type { VercelRequest, VercelResponse } from "@vercel/node";

const MONTHS = [
	"january",
	"february",
	"march",
	"april",
	"may",
	"june",
	"july",
	"august",
	"september",
	"october",
	"november",
	"december",
] as const;

const SUPPORTED_COMMUNITIES = new Set(["aa", "an", "aa24", "aadays", "alanon", "alanonmm"]);

function getDateParts(timeZone: string) {
	const parts = new Intl.DateTimeFormat("en-GB", {
		timeZone,
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	}).formatToParts(new Date());

	const day = parts.find(part => part.type === "day")?.value ?? "01";
	const month = parts.find(part => part.type === "month")?.value ?? "01";

	return { day, month };
}

export default function handler(req: VercelRequest, res: VercelResponse) {
	const community = String(req.query.community || "");
	if (!SUPPORTED_COMMUNITIES.has(community)) {
		res.status(404).send("Not found");
		return;
	}

	const timeZoneHeader = String(req.headers["x-vercel-ip-timezone"] || "");
	const timeZone = timeZoneHeader || "Europe/Moscow";
	const { day, month } = getDateParts(timeZone);
	const monthIndex = Number(month) - 1;
	const monthName = MONTHS[monthIndex] || MONTHS[0];
	const slug = `daily_${day}-${month}`;
	const location = `/${community}/${monthName}/${slug}`;

	res.setHeader("Cache-Control", "public, max-age=0, s-maxage=300, stale-while-revalidate=60");
	res.setHeader("Vary", "x-vercel-ip-timezone");
	res.redirect(307, location);
}
