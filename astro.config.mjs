import mdx from "@astrojs/mdx";
import solid from "@astrojs/solid-js";
import vercel from "@astrojs/vercel";
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
	adapter: vercel(),
	integrations: [mdx(), icon(), metaTags(), solid()],
	output: "server",
});
