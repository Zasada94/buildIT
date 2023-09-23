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
		<div className="swiper" style={{ maxWidth: "1140px" }}>
			<div className="swiper-wrapper">
				<div className="swiper-slide">
					<p
						className="slide_title"
						style={{
							margin: "0",
							position: "absolute",
							left: "20px",
							bottom: " 20px",
							fontFamily: "Oswald",
							fontSize: "30px",
							color: " White",
						}}
					>
						Poznań
					</p>
					<img src="/img/gallery/swiper/poznan.jpg" alt="" />
				</div>
				<div className="swiper-slide">
					<p
						className="slide_title"
						style={{
							margin: "0",
							position: "absolute",
							left: "20px",
							bottom: " 20px",
							fontFamily: "Oswald",
							fontSize: "30px",
							color: " White",
						}}
					>
						Wilanów
					</p>
					<img src="/img/gallery/swiper/wilanow.jpg" alt="" />
				</div>
				<div className="swiper-slide">
					<p
						className="slide_title"
						style={{
							margin: "0",
							position: "absolute",
							left: "20px",
							bottom: " 20px",
							fontFamily: "Oswald",
							fontSize: "30px",
							color: " White",
						}}
					>
						Stefanowo
					</p>
					<img src="/img/gallery/swiper/stefanowo.jpg" alt="" />
				</div>
			</div>
			{/* <!-- If we need pagination --> */}
			<div className="swiper-pagination"></div>

			{/* <!-- If we need navigation buttons --> */}
			<div
				className="swiper-button-prev"
				style={{
					color: "white",
				}}
			></div>
			<div
				className="swiper-button-next"
				style={{
					color: "white",
				}}
			></div>
		</div>
	);
};

export default Slider;
