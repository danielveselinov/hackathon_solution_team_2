import { GetStaticProps, NextPage } from "next";
import React from "react";
import { fetchData } from "../helpers/helpers";

import BlogInner from "../components/BlogInner";

import { BlogType } from "../components/BlogInner";

import styles from "../styles/mission.module.scss";
import MissionInner from "../components/MissionInner";

interface Props {
  missions: BlogType[];
}

export const Mission: NextPage<Props> = ({ missions }) => {
  return (
    <>
      <section className={styles["missions-container"]}>
        {missions.map((mission) => (
          <MissionInner key={mission.id} mission={mission} />
        ))}
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const missions = await fetchData(
    "https://5884-46-217-247-67.eu.ngrok.io/api/missions"
  );
  return {
    props: {
      missions,
    },
  };
};

export default Mission;
