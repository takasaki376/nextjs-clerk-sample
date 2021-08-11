import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "src/pages/index/Footer";
import { Main } from "src/pages/index/Main";
import styles from "src/styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Main />
      <Footer />
    </div>
  );
};
export default Home;
