import Container from "./container.astro";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import hikvision from "../assets/img/dobot.png";
import { Image } from "astro:assets";

const Service = () => {
	const ref = useRef(null);
	const isIview = useInView(ref, { once: true });
	const maincontroll = useAnimation();
	const imageControl = useAnimation();
	useEffect(() => {
		if (isIview) {
			maincontroll.start("visible");
			imageControl.start("rotate");
		}
	}, [isIview]);
	return (
		<section
			ref={ref}
			className="max-w-screen-2xl mx-auto px-6 md:px-14 xl:px-14 py-8"
		>
			<motion.div
				variants={{
					hidden: { opacity: 0, scale: 0 },
					visible: { opacity: 1, scale: 1 },
				}}
				initial="hidden"
				animate={maincontroll}
				transition={{
					duration: 0.3,
					delay: 0.5,
					ease: [0, 0.71, 0.2, 1.01],
					scale: {
						type: "spring",
						damping: 5,
						stiffness: 100,
						restDelta: 0.001,
					},
				}}
			>
				<div className="flex-row items-center my-6 p-4 bg-white rounded">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="justify-start items-center gap-[275px] flex">
							<div className="flex-col justify-start items-start gap-[26px] inline-flex text-black">
								<div className="text-3xl font-medium">DOBOT Magician E6</div>
								<div className="text-lg font-normal">
									Unlock the potential of robotics with the DOBOT Magician E6, a
									cutting-edge desktop collaborative robot designed to
									revolutionize education and research. Combining precision,
									versatility, and ease of use, the Magician E6 provides a
									powerful tool for learning and innovation in academic and
									research settings
								</div>
								<a
									href="/contact"
									className="px-[35px] py-5 bg-zinc-900 rounded-[14px] justify-start items-start gap-2.5 inline-flex"
								>
									<div className="text-center text-white text-xl font-normal leading-7">
										Contact us for quote
									</div>
								</a>
							</div>
						</div>
						<div className="grid cols-1 py-5">
							<motion.img
								src={hikvision.src}
								alt="cat"
								initial={{ scale: 0.9 }}
								animate={{ scale: 1 }}
								transition={{
									repeat: Infinity,
									repeatType: "mirror",
									duration: 2,
								}}
							/>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};
export default Service;
