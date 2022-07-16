import { GetStaticProps, NextPage } from "next";
import React from "react";

import { BlogType } from "../components/AboutUsInner";

// components
import "../components/AboutUsContent";
import AboutUsContent from "../components/AboutUsContent";

// helpers
import { fetchData } from "../helpers/helpers";

// styles
import styles from "../styles/about.module.scss";

interface Props {
  blogs: BlogType[];
}

const About: NextPage<Props> = ({ blogs }) => {
  return (
    <>
      <h2 className={styles["about-title"]}>About us</h2>
      <AboutUsContent blogs={blogs} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await fetchData(
    "https://5884-46-217-247-67.eu.ngrok.io/api/blogs"
  );

  return {
    props: {
      blogs,
    },
  };
};

export default About;
