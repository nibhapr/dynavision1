import { motion } from "framer-motion";
import Container from "./container.astro";
import { useState, useEffect } from "react";

const TextAnimation = () => {
	const text =
		"We're excited to showcase our products at DIDAC INDIA on 18-09-2024 at NEWDELHI.";

	const container = {
		hidden: { opacity: 0 },

		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.05,
			},
		},
	};

	const letter = {
		hidden: { opacity: 0, y: 100 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: "easeOut" },
		},
	};

	return (
		<motion.div
			className="md:flex justify-center overflow-auto text-red-600 px-8 text-base md:text-xl lg:text-2xl"
			variants={container}
			initial="hidden"
			animate="visible"
		>
			{text.split("").map((char, index) => (
				<motion.span key={index} variants={letter}>
					{char === " " ? "\u00A0" : char}
				</motion.span>
			))}
			<a href="https://brightelv.com" className="hidden">
				BrightElv
			</a>
		</motion.div>
	);
};

export default TextAnimation;
