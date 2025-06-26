// src/middleware.ts
import type { MiddlewareHandler } from "astro"

export const onRequest: MiddlewareHandler = async (context, next) => {
	const response = await next()

	const pathname = context.url.pathname

	// Страницы ежедневника
	if (
		/^\/(january|february|march|april|may|june|july|august|september|october|november|december)\/\d{1,2}$/.test(
			pathname,
		)
	) {
		response.headers.set(
			"Cache-Control",
			"public, max-age=82800, stale-while-revalidate=3600",
		)
	}

	// Главная страница
	else if (pathname === "/") {
		response.headers.set(
			"Cache-Control",
			"public, max-age=300, stale-while-revalidate=60",
		)
	}

	return response
}
