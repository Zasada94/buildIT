import Gallery from "components/Gallery";
import Header from "components/Header";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "components/Footer";

const Galeria: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Realizacje - Build it</title>
			</Head>

			<Header />

			<Gallery />

			{/* <Footer /> */}
		</div>
	);
};

export default Galeria;
