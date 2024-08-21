import { motion } from "framer-motion";
import digilink from "../assets/clients/dso3.png";
import digilink1 from "../assets/clients/meter.png";
import digilink2 from "../assets/clients/work2.png";
import digilink3 from "../assets/clients/work1.png";
import digilink4 from "../assets/clients/work.png";
import digilink5 from "../assets/clients/dso.png";

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
		<div className="relative w-full overflow-hidden mb-12 mt-12 ">
			<div className="mx-auto mb-12 w-full space-y-1 text-center sm:w-1/2 lg:w-1/3 md:p-0 p-5">
				<h2 className="text-balance text-2xl font-bold leading-tight text-neutral-800 sm:text-3xl fade-in-up-bounce">
					Trusted by Leading Brands
				</h2>
				<p className="text-pretty leading-tight text-neutral-600 fade-in-up-bounce-delayed">
					Leading brands, delivering excellence and innovation in our services.
				</p>
			</div>

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
