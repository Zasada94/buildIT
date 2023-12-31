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
		<div className="swiper" style={{ maxWidth: "1100px" }}>
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
							fontWeight: "500",
						}}
					>
						Szczytniki
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
							fontWeight: "500",
						}}
					>
						Szczytniki
					</p>
					<img src="/img/gallery/swiper/poznan2.jpg" alt="" />
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
							color: " white",
							fontWeight: "500",
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
							color: " white",
							fontWeight: "500",
						}}
					>
						Wilanów
					</p>
					<img src="/img/gallery/swiper/wilanow2.jpg" alt="" />
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
							fontWeight: "500",
						}}
					>
						Stefanowo
					</p>
					<img src="/img/gallery/swiper/stefanowo.jpg" alt="" />
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
							fontWeight: "500",
						}}
					>
						Stefanowo
					</p>
					<img src="/img/gallery/swiper/stefanowo2.jpg" alt="" />
				</div>
			</div>
			{/* <!-- If we need pagination --> */}
			<div className="swiper-pagination" id="pagination"></div>

			{/* <!-- If we need navigation buttons --> */}
			<div
				className="swiper-button-prev"
				id="button-prev"
				style={{
					color: "white",
				}}
			>
				<img src="/img/gallery/swiper/prev.png" alt="" className="prev" />
			</div>
			<div
				className="swiper-button-next"
				id="button-next"
				style={{
					color: "white",
				}}
			>
				{" "}
				<img src="/img/gallery/swiper/next.png" alt="" className="next" />
			</div>
		</div>
	);
};

export default Slider;
