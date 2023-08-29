import BigPicture from "components/BigPicture";
import Footer from "components/Footer";
import Header from "components/Header";
import Main from "components/Main";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Build it</title>
      </Head>

      <Header />
      <BigPicture />
      <Main />

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
