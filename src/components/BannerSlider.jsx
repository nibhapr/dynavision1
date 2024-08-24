import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

const banner1 = "/banner1.webp";
const banner2 = "/banner2.webp";
const banner3 = "/banner4.webp";
const banner4 = "/banner5.webp";
const banner5 = "/banner6.webp";
const sliders = [
	{
		id: 1,
		image: "/banner1.webp",
		title: "Digital oscilloscope distributor in kerala",
		desc: "Distributing advanced digital oscilloscopes to enhance precision in electronics education and hands-on learning",
		href: "/Signboards",
		button: "Learn More",
	},
	{
		id: 2,
		image: "/banner2.webp",
		title: "Comprehensive Robotics Lab Setup for Schools and Colleges",
		desc: "Equipping schools and colleges with state-of-the-art robotics labs to foster hands-on learning, innovation, and technical skills development in robotics",
		href: "/Signboards",
		button: "Learn More",
	},
	{
		id: 3,
		image: "/banner4.webp",
		title: "Advanced Electrical & Electronic Workbenches for Education",
		desc: "Supplying educational institutions with top-tier electrical and electronic workbenches to enhance hands-on learning and technical proficiency in engineering",
		href: "/Signboards",
		button: "Learn More",
	},
	{
		id: 4,
		image: "/banner5.webp",
		title:
			"we offer the latest Dobot teaching kits to enhance educational experiences",
		desc: "Our robotics kits are designed for effective STEM teaching,helping students grasp complex concepts through hands-on activities. Shop now and bring cutting-edge technology to your educational institution",
		button: "Learn More",
	},
	{
		id: 5,
		image: "/banner6.webp",
		title:
			"we offer the latest Dobot teaching kits to enhance educational experiences",
		desc: "Our robotics kits are designed for effective STEM teaching,helping students grasp complex concepts through hands-on activities. Shop now and bring cutting-edge technology to your educational institution",
		button: "Learn More",
	},
];

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const slides = [banner1, banner2, banner3, banner4, banner5];

	const nextSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide(
			(prevSlide) => (prevSlide - 1 + slides.length) % slides.length,
		);
	};

	useEffect(() => {
		const interval = setInterval(nextSlide, 6000); // Change slide every 5 seconds
		return () => clearInterval(interval); // Cleanup on unmount
	}, []);

	return (
		<div className="relative w-full h-[500px] md:h-screen overflow-hidden mb-8">
			<div
				className="absolute top-0 left-0 w-full h-full flex transition-transform duration-1000"
				style={{ transform: `translateX(-${currentSlide * 100}%)` }}
			>
				{sliders.map((slider) => (
					<div
						className="w-full h-full flex-shrink-0 bg-cover bg-center"
						style={{ backgroundImage: `url(${slider.image})` }}
					>
						<div className="flex flex-col justify-center items-start h-full text-left text-white p-12">
							<div className="bg-black bg-opacity-50 p-4 rounded md:w-1/2">
								<h1 className="text-4xl font-bold mb-4">{slider.title}</h1>
								<p className="mb-4">{slider.desc}</p>
								{slider.href && (
									<a href={slider.href}>
										<button className="bg-blue-950 hover:bg-blue-700 text-white font-semibold text-2xl py-2 px-4 cursor-pointer rounded-xl">
											{slider.button}
										</button>
									</a>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
			<button
				className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
				onClick={prevSlide}
			>
				❮
			</button>
			<button
				className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
				onClick={nextSlide}
			>
				❯
			</button>
		</div>
	);
};

export default Slider;
