import Link from "next/link";
import { useRouter } from "next/router";
import path from "path";
import React from "react";

import { useParams } from "react-router-dom";

import styles from "../styles/service.module.scss";

export interface ServiceType {
  id: string;
  text1: string;
  image1: string;
  text2: string;
  image2: string;
}

type Props = {
  service: ServiceType;
};

interface LinkType {}

const SERVICE_LINKS = [
  {
    id: 1,
    text: "Land Freight",
    path: "/land-freight",
  },
  {
    id: 2,
    text: "Water Freight",
    path: "/water-freight",
  },
  {
    id: 3,
    text: "Air Freight",
    path: "/air-freight",
  },
  {
    id: 4,
    text: "Warehouse Storage",
    path: "/warehouse-storage",
  },
];

const Service: React.FC<Props> = ({ service }) => {
  const { pathname } = useRouter();

  const { image1, image2, text1, text2 } = service;
  return (
    <div className={styles.service}>
      <div className={styles["details-container"]}>
        <p>{text1}</p>
        <img className={styles.image} src={image1} alt="" />
      </div>
      <div className={styles["details-container"]}>
        <p>{text2}</p>
        <img className={styles.image} src={image2} alt="" />
      </div>
      <ul className={styles["service-links"]}>
        {SERVICE_LINKS.map((link) => (
          <li key={`${link.id + link.text}`}>
            <Link href={link.path}>
              <a
                className={`${styles["service-link"]} ${
                  pathname === link.path && `${styles["service-link-active"]}`
                }`}
              >
                {link.text}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Service;
