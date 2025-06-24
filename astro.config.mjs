import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import icon from "astro-icon"
import metaTags from "astro-meta-tags"
import { defineConfig } from "astro/config"
import { config } from "./src/config"

export default defineConfig({
	site: `${config.site.url}`,
	vite: {
		plugins: [tailwindcss()],
	},
	redirects: {
		"/": "/aa",
		"/aa": "/aa/now",
		"/aadays": "/aadays/now",
		"/alanon": "/alanon/now",
		"/aa24": "/aa24/now",
		"/an": "/an/now",
		"/alanonmm": "/alanonmm/now",
	},
	prefetch: {
		defaultStrategy: "viewport",
		prefetchAll: true,
	},
	integrations: [mdx(), sitemap(), icon(), metaTags(), react()],
	output: "static",
})
