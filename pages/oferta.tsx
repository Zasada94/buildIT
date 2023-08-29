import Header from "components/Header";
import Offer from "components/Offer";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Oferta: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oferta - Build it</title>
      </Head>

      <Header />

      <Offer />

      {/* <Footer /> */}
    </div>
  );
};

export default Oferta;
