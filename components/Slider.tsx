import React, { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
	useEffect(() => {
		const swiper = new Swiper(".swiper", {
			modules: [Navigation, Pagination, Autoplay],
			// Swiper configuration options go here
			slidesPerView: 1,
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		});
	}, []);

	return (
		<div className="swiper">
			<div className="swiper-wrapper">
				<div className="swiper-slide">
					<img src="/img/slider/1.jpg" alt="" />
				</div>
				<div className="swiper-slide">
					<img src="/img/slider/2.jpg" alt="" />
				</div>
				<div className="swiper-slide">
					<img src="/img/slider/3.jpg" alt="" />
				</div>
				<div className="swiper-slide">
					<img src="/img/slider/4.jpg" alt="" />
				</div>
			</div>
			{/* <!-- If we need pagination --> */}
			<div className="swiper-pagination"></div>

			{/* <!-- If we need navigation buttons --> */}
			<div className="swiper-button-prev"></div>
			<div className="swiper-button-next"></div>
		</div>
	);
};

export default Slider;
