import Link from "next/link";
import Footer from "./Footer";
import * as React from "react";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import slides from "../data/slides";
import { styled } from "styled-components";
import Slider from "./Slider";

const AllWrapper = styled.div`
	max-width: 1140px;
	margin: 0 auto;
`;
const Wrapper = styled.section`
	z-index: 2;
`;
const Container = styled.div``;
const Lines = styled.section``;

const Gallery = () => {
	const [index, setIndex] = React.useState(-1);
	const [index2, setIndex2] = React.useState(-1);
	const [index3, setIndex3] = React.useState(-1);

	const poznanGallery = [
		{ src: `/img/gallery/poznan/1.jpg`, width: 1500, height: 1500 },
		{ src: `/img/gallery/poznan/2.jpg`, width: 1500, height: 1500 },
		{ src: `/img/gallery/poznan/3.jpg`, width: 1500, height: 1500 },
		{ src: `/img/gallery/poznan/4.jpg`, width: 1500, height: 1500 },
	];

	const stefanowoGallery = [
		{ src: `/img/gallery/stefanowo/1.jpg`, width: 2000, height: 1500 },
		{ src: `/img/gallery/stefanowo/2.jpg`, width: 2000, height: 1126 },
		{ src: `/img/gallery/stefanowo/3.jpg`, width: 2000, height: 1126 },
		{ src: `/img/gallery/stefanowo/4.jpg`, width: 2000, height: 1126 },
		{ src: `/img/gallery/stefanowo/5.jpg`, width: 2000, height: 1126 },
		{ src: `/img/gallery/stefanowo/6.jpg`, width: 2000, height: 1126 },
	];

	const wilanowGallery = [
		{ src: `/img/gallery/wilanow/1.jpg`, width: 1500, height: 2000 },
		{ src: `/img/gallery/wilanow/2.jpg`, width: 1500, height: 1500 },
		{ src: `/img/gallery/wilanow/3.jpg`, width: 1500, height: 1500 },
		{ src: `/img/gallery/wilanow/4.jpg`, width: 768, height: 1024 },
		{ src: `/img/gallery/wilanow/5.jpg`, width: 768, height: 1024 },
	];

	return (
		<>
			<section
				className="banner-header banner-img valign bg-img bg-fixed"
				data-overlay-light="3"
				style={{ backgroundImage: "url(img/banner.jpg)" }}
			></section>
			<AllWrapper>
				<section className="gallery">
					<div className="container">
						<div className="row">
							<div
								className="col-md-6 animate-box"
								data-animate-effect="fadeInUp"
							>
								<h2 className="section-title">Nasze realizacje</h2>
							</div>
						</div>
					</div>
				</section>
				<Wrapper>
					<Slider />
					{/* //inwestycja poznan */}
					<div>
						<h3
							style={{ color: "black", marginTop: "50px", marginLeft: "15px" }}
						>
							Inwestycja Poznań
						</h3>
					</div>
					<PhotoAlbum
						layout="rows"
						photos={poznanGallery}
						targetRowHeight={150}
						onClick={({ index: current }) => setIndex(current)}
					/>
					<Lightbox
						index={index}
						slides={poznanGallery}
						open={index >= 0}
						close={() => setIndex(-1)}
					/>
					{/* //inwestycja stefanowo */}
					<div>
						<h3
							style={{ color: "black", marginTop: "50px", marginLeft: "15px" }}
						>
							Inwestycja Stefanowo
						</h3>
					</div>
					<PhotoAlbum
						layout="rows"
						photos={stefanowoGallery}
						targetRowHeight={150}
						onClick={({ index: current }) => setIndex2(current)}
					/>
					<Lightbox
						index={index2}
						slides={stefanowoGallery}
						open={index2 >= 0}
						close={() => setIndex2(-1)}
					/>
					{/* //inwestycja wilanow */}
					<div>
						<h3
							style={{ color: "black", marginTop: "50px", marginLeft: "15px" }}
						>
							Inwestycja Wilanów
						</h3>
					</div>
					<PhotoAlbum
						layout="rows"
						photos={wilanowGallery}
						targetRowHeight={150}
						onClick={({ index: current }) => setIndex3(current)}
					/>
					<Lightbox
						index={index3}
						slides={wilanowGallery}
						open={index3 >= 0}
						close={() => setIndex3(-1)}
					/>
				</Wrapper>
				<Container className="content-wrapper">
					<Lines className="content-lines-wrapper">
						<div className="content-lines-inner">
							<div className="content-lines"></div>
						</div>
					</Lines>
					<Footer />
				</Container>
			</AllWrapper>
		</>
	);
};

export default Gallery;
