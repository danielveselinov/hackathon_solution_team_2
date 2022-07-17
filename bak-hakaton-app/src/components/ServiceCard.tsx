/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

import styles from "../styles/service-card.module.scss";

interface Props {
  path: string;
  img: string;
  desc: string;
  title: string;
}

const ServiceCard: React.FC<Props> = ({ desc, img, path, title }) => {
  return (
    <Link href={path}>
      <a className={styles["service-card"]}>
        <div className={styles["details-container"]}>
          <img src={img} alt={title} />
          <p>{desc}</p>
        </div>
        <p className={styles["service-card-title"]}>{title}</p>
      </a>
    </Link>
  );
};

export default ServiceCard;
