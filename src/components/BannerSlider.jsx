import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

const banner1 = "/banner1.jpg";
const banner2 = "/banner2.jpg";
const banner3 = "/banner4.jpg";

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const slides = [banner1, banner2, banner3];

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
		<div className="relative w-full h-[500px] md:h-screen overflow-hidden">
			<div
				className="absolute top-0 left-0 w-full h-full flex transition-transform duration-1000"
				style={{ transform: `translateX(-${currentSlide * 100}%)` }}
			>
				<div
					className="w-full h-full flex-shrink-0 bg-cover bg-center"
					style={{ backgroundImage: `url(${banner1})` }}
				>
					<div className="flex flex-col justify-center items-start h-full text-left text-white p-12">
						<div className="bg-black bg-opacity-50 p-4 rounded md:w-1/2">
							<h1 className="text-4xl font-bold mb-4">
								Digital oscilloscope distributor in kerala
							</h1>
							<p className="mb-4">
								Distributing advanced digital oscilloscopes to enhance precision
								in electronics education and hands-on learning
							</p>
							<a href="/Signboards">
								<button className="bg-blue-950 hover:bg-blue-700 text-white font-semibold text-2xl py-2 px-4 cursor-pointer rounded-xl">
									Learn More
								</button>
							</a>
						</div>
					</div>
				</div>
				<div
					className="w-full h-full flex-shrink-0 bg-cover bg-center"
					style={{ backgroundImage: `url(${banner2})` }}
				>
					<div className="flex flex-col justify-center items-start h-full text-left text-white p-12">
						<div className="bg-black bg-opacity-50 p-4 rounded md:w-1/2">
							<h1 className="text-4xl font-bold mb-4">
								Comprehensive Robotics Lab Setup for Schools and Colleges
							</h1>
							<p className="mb-4">
								Equipping schools and colleges with state-of-the-art robotics
								labs to foster hands-on learning, innovation, and technical
								skills development in robotics
							</p>
						</div>
					</div>
				</div>
				<div
					className="w-full h-full flex-shrink-0 bg-cover bg-center"
					style={{ backgroundImage: `url(${banner3})` }}
				>
					<div className="flex flex-col justify-center items-start h-full text-left text-white p-12">
						<div className="bg-black bg-opacity-50 p-4 rounded md:w-1/2">
							<h1 className="text-4xl font-bold mb-4">
								Advanced Electrical & Electronic Workbenches for Education
							</h1>
							<p className="mb-4">
								Supplying educational institutions with top-tier electrical and
								electronic workbenches to enhance hands-on learning and
								technical proficiency in engineering
							</p>
						</div>
					</div>
				</div>
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
