import { GetStaticProps, NextPage } from "next";
import React from "react";
import AboutUsContent from "../components/AboutUsContent";
import { BlogType } from "../components/AboutUsInner";
import CareersForm from "../components/CareersForm";
import { fetchData } from "../helpers/helpers";

import styles from "../styles/general.module.scss";

interface Props {
  careers: BlogType[];
}

export const Careers: NextPage<Props> = ({ careers }) => {
  return (
    <div>
      <h2 className={styles["primary-title"]}>Careers</h2>
      <AboutUsContent blogs={careers} />
      <CareersForm />
    </div>
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
