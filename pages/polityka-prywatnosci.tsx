import Polityka from "components/Polityka";
import Header from "components/Header";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Kontakt: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kontakt - Build it</title>
      </Head>

      <Header />

      <Polityka />

      {/* <Footer /> */}
    </div>
  );
};

export default Kontakt;
