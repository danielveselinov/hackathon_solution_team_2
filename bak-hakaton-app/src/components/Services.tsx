import React from "react";

import styles from "../styles/general.module.scss";

import Service from "./Service";

import { ServiceType } from "./Service";
interface Props {
  title: string;
  service: ServiceType[];
}

const Services: React.FC<Props> = ({ title, service }) => {
  return (
    <>
      <h2 className={styles["primary-title"]}>{title}</h2>
      <Service service={service[0]} />
    </>
  );
};

export default Services;
