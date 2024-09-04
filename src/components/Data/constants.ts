import ogImageSrc from "@img/social.png";

export const SITE = {
	title: "Lovosis Technology LLC ",
	tagline:
		"Custom Fabrication & Surveillance Solution Provider In Dubai, United Arab Emirates",
	description:
		"Custom Fabrication & Surveillance Solution Provider In Dubai, United Arab Emirates",
	description_short:
		"Custom Fabrication & Surveillance Solution Provider In Dubai, United Arab Emirates",
	url: "https://lovosis.com/",
	author: "Digiimpact",
};

export const SEO = {
	title: SITE.title,
	description: SITE.description,
	structuredData: {
		"@context": "https://schema.org",
		"@type": "WebPage",
		inLanguage: "en-US",
		"@id": SITE.url,
		url: SITE.url,
		name: SITE.title,
		description: SITE.description,
		isPartOf: {
			"@type": "WebSite",
			url: SITE.url,
			name: SITE.title,
			description: SITE.description,
		},
	},
};

export const OG = {
	locale: "en_US",
	type: "website",
	url: SITE.url,
	title: `${SITE.title}: : Custom Fabrication & Surveillance Solution Provider In Dubai, United Arab Emirates`,
	description: "Custom Fabrication & Surveillance Solution Provider In Dubai",
	image: ogImageSrc,
};
