import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import metaTags from "astro-meta-tags";
import { defineConfig } from "astro/config";
import { config } from "./src/config";

export default defineConfig({
	site: `${config.site.url}`,
	vite: {
		plugins: [tailwindcss()],
	},
	prefetch: {
		defaultStrategy: "viewport",
		prefetchAll: true,
	},
	integrations: [mdx(), sitemap(), icon(), metaTags(), svelte()],
	output: "static",
});
