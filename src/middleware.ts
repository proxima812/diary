import { defineMiddleware } from "astro/middleware"

const STATIC_PREFIXES = ["/_astro", "/api", "/favicon", "/icons", "/images"]
const STATIC_FILE_RE = /\.[a-zA-Z0-9]+$/

export const onRequest = defineMiddleware(async (context, next) => {
	const { pathname } = context.url

	if (pathname === "/bot" || pathname.startsWith("/bot/")) {
		return context.redirect("https://t.me/dear_diary365_bot", 308)
	}

	if (
		pathname === "/robots.txt" ||
		STATIC_PREFIXES.some(prefix => pathname.startsWith(prefix)) ||
		STATIC_FILE_RE.test(pathname)
	) {
		const response = await next()
		return response
	}

	const redirect = context.redirect("/bot", 308)
	redirect.headers.set("Cache-Control", "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800")
	redirect.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet, noimageindex")
	return redirect
})
