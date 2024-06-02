import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import playformCompress from "@playform/compress";
import { VitePWA } from "vite-plugin-pwa";
import icon from "astro-icon";
import { manifest, seoConfig } from "./utils/seoConfig";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	site: seoConfig.baseURL,
	integrations: [
		tailwind({
			applyBaseStyles: false,
			configFile: "./tailwind.config.js",
		}),
		sitemap(),
		playformCompress(),
		icon({
			include: {
				tabler: ["*"],
			},
		}),
		react(),
		mdx({
			syntaxHighlight: "shiki",
			shikiConfig: {
				theme: "github-dark-dimmed",
			},
			gfm: true,
		}),
	],
	vite: {
		plugins: [
			VitePWA({
				registerType: "autoUpdate",
				manifest,
				workbox: {
					globDirectory: "dist",
					globPatterns: [
						"**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}",
					],
					// Don't fallback on document based (e.g. `/some-page`) requests
					// This removes an errant console.log message from showing up.
					navigateFallback: null,
				},
			}),
		],
	},
});
