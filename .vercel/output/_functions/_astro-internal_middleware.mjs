import { d as defineMiddleware, s as sequence } from './chunks/index_YeQv6Mi6.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_C4rAT21L.mjs';
import 'kleur/colors';
import './chunks/astro/server_aF7gp8kR.mjs';
import 'clsx';
import 'cookie';

const STATIC_PREFIXES = ["/_astro", "/api", "/favicon", "/icons", "/images"];
const STATIC_FILE_RE = /\.[a-zA-Z0-9]+$/;
const onRequest$1 = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  if (pathname === "/bot" || pathname.startsWith("/bot/")) {
    return context.redirect("https://t.me/dear_diary365_bot", 308);
  }
  if (pathname === "/robots.txt" || STATIC_PREFIXES.some((prefix) => pathname.startsWith(prefix)) || STATIC_FILE_RE.test(pathname)) {
    const response = await next();
    return response;
  }
  const redirect = context.redirect("/bot", 308);
  redirect.headers.set("Cache-Control", "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800");
  redirect.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet, noimageindex");
  return redirect;
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
