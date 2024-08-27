// An array of links for navigation bar

// An object of links for social icons
export const socialLinks = {
	facebook: "https://www.facebook.com/profile.php?id=61561361666336",
	x: "https://twitter.com",
	linkedin: "https://www.linkedin.com/company/digital-link-technology-uae/",
	google: "https://g.co/kgs/yq4CrN8",
	instagram: "https://www.instagram.com/digitallinktechnologyllc/",
};
export const navBarLinks = [
	{ name: "Home", url: "/" },
	{ name: "Blog", url: "/blogs" },
	{ name: "Contact", url: "/contact" },
];
export const footerData = {
	links: [
		{
			title: "Menus",
			links: [
				{ text: "Home", href: "/" },
				{ text: "Blog", href: "blogs" },
				{ text: "Contact", href: "contact" },
			],
		},

		{
			title: "Products",
			links: [
				{ text: "Digital Oscilloscope" },
				{ text: "Meters" },
				// { text: 'Careers', href: '#' },
				{ text: "Customized Work Benches" },
			],
		},
	],

	socialLinks: [
		{ ariaLabel: "X", icon: "tabler:brand-x", href: "#" },
		{ ariaLabel: "Instagram", icon: "tabler:brand-instagram", href: "#" },
		{ ariaLabel: "Facebook", icon: "tabler:brand-facebook", href: "#" },

		{
			ariaLabel: "Github",
			icon: "tabler:brand-github",
			href: "https://github.com/onwidget/astrowind",
		},
	],
	footNote: `
	  <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
	  Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
	`,
};
