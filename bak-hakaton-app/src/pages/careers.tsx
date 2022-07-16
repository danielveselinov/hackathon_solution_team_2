import { GetStaticProps, NextPage } from "next";
import React from "react";
import { fetchData } from "../helpers/helpers";

import { BlogType } from "../components/AboutUsInner";

import styles from "../styles/general.module.scss";
import AboutUsContent from "../components/AboutUsContent";

interface Props {
  careers: BlogType[];
}

export const Careers: NextPage<Props> = ({ careers }) => {
  return (
    <>
      <h2 className={styles["primary-title"]}>Careers</h2>
      <AboutUsContent blogs={careers} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const careers = await fetchData(
    "https://5884-46-217-247-67.eu.ngrok.io/api/careers"
  );
  return {
    props: {
      careers,
    },
  };
};

export default Careers;
