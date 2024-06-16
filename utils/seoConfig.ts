import type { ManifestOptions } from "vite-plugin-pwa";

export const seoConfig = {
	Title: "Digital oscilloscope distributor and manufacturer in india",
	baseURL: "https://digiimpact.tech",
	canonical: "https://digiimpact.tech", // Change this to your production URL.
	description:
		"Quality educational tools distributed India. From labs to classrooms, we provide essential supplies for effective teaching and learning.",
	type: "website",
	image: {
		url: "https://digiimpact.tech/oscilloscope.webp", // Change this to your website's thumbnail.
		alt: "OpenGraph thumbnail description.", // Change this to your website's thumbnail description.
		width: 1200,
		height: 630,
	},
	siteName: "Digiimapct|Quality Educational equipment tools",
	openGraph: {
		basic: {
			title: "Digital oscilloscope distributor and manufacturer in india",
			type: "Website",
			image: {
				url: "https://digiimpact.tech/oscilloscope.webp", // Change this to your website's thumbnail.
				alt: "OpenGraph thumbnail description.", // Change this to your website's thumbnail description.
				width: 1200,
				height: 630,
			},
		},
		optional: {
			siteName: "Digiimpact",
			description:
				"Quality educational tools distributed India. From labs to classrooms, we provide essential supplies for effective teaching and learning.",
			video: {
				url: "https://youtu.be/iXoD66f3-EI",
				alt: "Educational equipment distributor",
				width: 1280,
				height: 720,
			},
		},
	}, // Change this to your website's name,

	twitter: {
		card: "summary_large_image",
		site: "Digiimpact",
		creator: "Digiimpact",
		title: "Digital oscilloscope distributor and manufacturer in india",
		description:
			"Quality educational tools distributed India. From labs to classrooms, we provide essential supplies for effective teaching and learning.",
		image: "https://digiimpact.tech/oscilloscope.webp",
		imageAlt: "Educational equipment distributor",
	},
};

export const manifest: Partial<ManifestOptions> = {
	name: "Digiimpact",
	short_name: "Educational equipment",
	description:
		"Quality educational tools distributed India. From labs to classrooms, we provide essential supplies for effective teaching and learning.", // Change this to your websites description.
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
