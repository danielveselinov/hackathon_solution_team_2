import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Blog } from "../components/Blog";
import HomePageContactForm from "../components/HomePageContactForm";
import HeroBanner from "../components/HeroBanner";
import MainTitle from "../components/MainTitle";
import ServiceCards from "../components/ServiceCards";
import { fetchData } from "../helpers/helpers";

import styles from "../styles/HeaderStyles/heroBanner.module.scss";
import News from "../components/News";

interface Props {}

const Home: NextPage<Props> = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
      </Head>
      <div className={styles.HeroBannerContainer}>
        <HeroBanner />
        <MainTitle />
      </div>
      <Blog />
      <News />
      <HomePageContactForm />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default Home;
