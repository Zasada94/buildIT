import Header from "components/Header";
import Pricing from "components/Pricing";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Cennik: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cennik - Build it</title>
      </Head>

      <Header />

      <Pricing />

      {/* <Footer /> */}
    </div>
  );
};

export default Cennik;
