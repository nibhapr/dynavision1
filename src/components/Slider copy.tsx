import { motion } from "framer-motion";
import digilink from "../assets/clients/01.svg";
import digilink1 from "../assets/clients/02.svg";
import digilink2 from "../assets/clients/03.svg";
import digilink3 from "../assets/clients/04.svg";
import digilink4 from "../assets/clients/05.svg";
import digilink5 from "../assets/clients/06.svg";

const slides = [
	digilink,
	digilink1,
	digilink2,
	digilink3,
	digilink4,
	digilink5,
];
const Slider = () => {
	// Duplicate the slides array to ensure seamless looping
	const duplicatedSlides = [...slides, ...slides];

	return (
		<div className=" w-auto mx-auto overflow-hidden relative py-12 hidden lg:block">
			<motion.div
				className="flex items-center gap-x-4"
				initial={{ x: "-50%" }}
				animate={{ x: "0%" }}
				transition={{
					duration: 20,
					ease: "linear",
					repeat: Infinity,
					repeatType: "loop",
				}}
			>
				{duplicatedSlides.map((slide, index) => (
					<div key={index} className="p-4 transition border-2  ">
						<img
							src={slide?.src}
							className=" max-w-screen-xl mx-auto"
							loading="lazy"
							alt="client logo"
							width=""
							height=""
						/>
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default Slider;
