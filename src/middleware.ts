import type { MiddlewareHandler } from "astro"

export const onRequest: MiddlewareHandler = async (context, next) => {
	const response = await next()
	const pathname = context.url.pathname

	// Ежедневники и месяцы
	const journals = ["aa", "an", "alanon", "alanonmm", "aa24", "aadays"]
	const months = [
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
	]

	// Regex для путей типа: /aa/june/26
	const dayPageRegex = new RegExp(
		`^/(${journals.join("|")})/(${months.join("|")})/\\d{1,2}$`,
	)

	if (dayPageRegex.test(pathname)) {
		response.headers.set(
			"Cache-Control",
			"public, max-age=82800, stale-while-revalidate=3600",
		)
	}

	// Главная — короткий кэш
	if (pathname === "/") {
		response.headers.set(
			"Cache-Control",
			"public, max-age=300, stale-while-revalidate=60",
		)
	}

	return response
}
