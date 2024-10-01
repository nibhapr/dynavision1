import { SITE } from "@component/Data/constants";
import cardsData from "@component/Data/cardsData.json";
import { motion } from "framer-motion";

const FabricationPage = () => {
	const pageTitle = `High-Performance Interactive Panels for Education | ${SITE.title + " - " + "Custom Fabrication & Surveillance Solution Provider In Dubai, United Arab Emirates"}`;
	const abtitle = "High-Performance Interactive Panels for Education";
	const absubTitle =
		"DIGIIMPACT,  Authorized supplier of top-quality Interactive Panels for educations";

	return (
		<section className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">
			<motion.div className="text-center bg-gray-100 dark:bg-neutral-500 p-5 md:p-12 rounded-2xl mb-20">
				<h1 className="text-balance animate-fade-in-left text-3xl md:text-6xl md:leading-tight font-bold tracking-tight text-neutral-800 dark:text-neutral-100">
					{abtitle}
				</h1>
				<p className="mt-1 text-pretty text-neutral-600 dark:text-neutral-200">
					{absubTitle}
				</p>
			</motion.div>

			<div className="grid lg:grid-cols-2 mx-auto  gap-5 ">
				<motion.div
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1, delay: 0.2 }}
					className="flex flex-col justify-center"
				>
					{" "}
					<img src="/interact5.webp" alt="billboard image" />
				</motion.div>
				<motion.div
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
					className="flex flex-col justify-center order-1 lg:order-2"
				>
					<h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-200">
						Reliable Interactive Touchscreens for Educational Use
					</h2>
					<p className="text-md mt-4 dark:text-gray-300">
						Enhance your educational facilities with our reliable interactive
						touchscreens. Our interactive panels are built to withstand the
						rigors of daily classroom use while providing exceptional visual
						clarity and touch sensitivity. Designed for a variety of educational
						settings, from primary schools to higher education institutions,
						these touchscreens support interactive teaching methods and
						collaborative learning environments. With easy setup, robust
						performance, and comprehensive support, our interactive touchscreens
						are the perfect addition to any modern educational setting.
					</p>
				</motion.div>
			</div>

			<div className="text-center mt-32 rounded-2xl mb-20">
				<h1 className="text-balance animate-fade-in-left text-2xl md:text-4xl md:leading-tight font-bold tracking-tight text-neutral-800 dark:text-neutral-100">
					Find Your Perfect Display
				</h1>
			</div>

			<div className="mx-auto max-w-7xl px-4 mt-20 sm:px-6 lg:px-8 lg:py-1">
				<ul id="cards" className="list-none grid grid-cols-1 grid-rows-4 gap-4">
					{cardsData.map((card) => (
						<li
							key={card.id}
							className="card sticky top-32 pt-4 bg-white dark:bg-neutral-600 rounded-lg shadow-xl cursor-pointer transition-all duration-300"
							id={`card_${card.id}`}
						>
							<div className="card__content grid grid-cols-1 md:grid-cols-2 gap-1 p-5 rounded-lg text-left relative">
								<div className="flex flex-col justify-center">
									<h2 className="text-4xl font-light dark:text-neutral-200">
										{card.title}
									</h2>
									<p className="text-base font-light leading-normal dark:text-neutral-300">
										{card.description}
									</p>
								</div>
								<figure className="overflow-hidden">
									<img
										src={card.imageSrc}
										alt="Metal Fabrication"
										className="w-full h-full object-contain"
									/>
								</figure>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default FabricationPage;
