import { motion } from "framer-motion";

const AnnounceComponents = () => {
	return (
		<motion.div
			className="w-full px-4 sm:px-6 lg:px-8 mx-auto"
			initial={{ x: "100%" }} // Start from off-screen to the right
			animate={{ x: "-100%" }} // Move to off-screen to the left
			transition={{ duration: 50, repeat: Infinity, ease: "linear" }} // Infinite loop
			style={{ whiteSpace: "nowrap" }}
			// Replace with the actual image path
		>
			Welcome to DigiImpact! We're excited to showcase our products at DIDAC
			INDIA.
		</motion.div>
	);
};

export default AnnounceComponents;

{
	/* <div class="w-full px-4 sm:px-6 lg:px-8 mx-auto">
	<div
		class="bg-blue-600 bg-[url('https://preline.co/assets/svg/examples/abstract-1.svg')] bg-no-repeat bg-cover bg-center p-4 rounded-lg text-center"
	>
		<p class="me-2 inline-block text-white">DigiImpact at DIDAC INDIA 2024</p>
		<!-- <a
			class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border-2 border-white text-white hover:border-white/70 hover:text-white/70 focus:outline-none focus:border-white/70 focus:text-white/70 disabled:opacity-50 disabled:pointer-events-none"
			href="../figma.html"
		>
			Learn more
			<svg
				class="shrink-0 size-4"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg
			>
		</a> -->
	</div>
</div> */
}
