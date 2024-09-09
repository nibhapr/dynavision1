import { motion } from "framer-motion";

const TextAnimation = () => {
	const text =
		"We're excited to showcase our products at DIDAC INDIA on 18-09-2024 at NEWDELHI.";

	// Variants for staggered text animation
	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.05, // Time between each letter animation
			},
		},
	};

	const letter = {
		hidden: { opacity: 0, y: 50 }, // Start off-screen below
		visible: {
			opacity: 1,
			y: 0, // Animate to its original position
			transition: { duration: 0.5, ease: "easeOut" },
		},
	};

	return (
		<motion.div
			className="text-container"
			variants={container}
			initial="hidden"
			animate="visible"
			style={{
				display: "flex",
				justifyContent: "center",
				fontSize: "34px",
				color: "red",
			}}
		>
			{text.split("").map((char, index) => (
				<motion.span
					key={index}
					variants={letter}
					style={{
						color: char === "DIDAC INDIA" ? "red" : "#dfgdg", // Color specific words or letters
						display: "inline-block",
					}}
				>
					{char === " " ? "\u00A0" : char}
				</motion.span>
			))}
		</motion.div>
	);
};

export default TextAnimation;
