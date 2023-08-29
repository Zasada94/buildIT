import Link from "next/link";
import Footer from "./Footer";
import * as React from "react";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import slides from "../data/slides";
import { styled } from "styled-components";

const Wrapper = styled.section`
	z-index: 2;
`;
const Container = styled.div``;
const Lines = styled.section``;

const Gallery = () => {
	const [index, setIndex] = React.useState(-1);
	return (
		<>
			<section
				className="banner-header banner-img valign bg-img bg-fixed"
				data-overlay-light="3"
				style={{ backgroundImage: "url(/img/banner.jpg)" }}
			></section>

			<section className="gallery">
				<div className="container">
					<div className="row">
						<div
							className="col-md-6 animate-box"
							data-animate-effect="fadeInUp"
						>
							<h2 className="section-title">Galeria</h2>
						</div>
					</div>
				</div>
			</section>
			<Wrapper>
				<PhotoAlbum
					layout="rows"
					photos={slides}
					targetRowHeight={150}
					onClick={({ index: current }) => setIndex(current)}
				/>

				<Lightbox
					index={index}
					slides={slides}
					open={index >= 0}
					close={() => setIndex(-1)}
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
		</>
	);
};

export default Gallery;