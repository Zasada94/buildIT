import AboutUs from "components/AboutUs";
import Header from "components/Header";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const ONas: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>O nas - Build it</title>
      </Head>

      <Header />
      <AboutUs />

      {/* <Footer /> */}
    </div>
  );
};

export default ONas;
