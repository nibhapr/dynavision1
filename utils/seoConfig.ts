import type { ManifestOptions } from "vite-plugin-pwa";

export const seoConfig = {
	baseURL: "https://digiimpact.in", // Change this to your production URL.
	description:
		"Boosting businesses in Kerala, with top-tier web design, digital marketing, and app development services. Dominate online with our expert SEO strategies.",
	type: "website",
	image: {
		url: "https://picsum.photos/1200/630", // Change this to your website's thumbnail.
		alt: "OpenGraph thumbnail description.", // Change this to your website's thumbnail description.
		width: 1200,
		height: 630,
	},
	siteName: "Digiimapct|Let's build your vision together ", // Change this to your website's name,
	twitter: {
		card: "summary_large_image",
	},
};

export const manifest: Partial<ManifestOptions> = {
	name: "Digiimpact",
	short_name: "Digital Marketing",
	description:
		"Transforming web design with Next.js, React,Vue.js and Astro. Elevate your online presence with our cutting-edge technologies.", // Change this to your websites description.
	theme_color: "#30E130",
	background_color: "#ffffff",
	display: "minimal-ui",
	icons: [
		{
			src: "/favicons/favicon-192x192.png",
			sizes: "192x192",
			type: "image/png",
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png",
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png",
			purpose: "any maskable",
		},
	],
};
