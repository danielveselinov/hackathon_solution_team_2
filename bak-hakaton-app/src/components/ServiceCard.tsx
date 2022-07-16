import Link from "next/link";
import React from "react";

import styles from "../styles/service-card.module.scss";

interface Props {}

const ServiceCard: React.FC<Props> = () => {
  return (
    <Link href="/">
      <a className={styles["service-card"]} href="">
        <div className={styles["details-container"]}>
          <img
            src="https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
            alt=""
          />
          <p>Lorem, ipsum dolor.</p>
        </div>
        <p className={styles["service-card-title"]}>Title</p>
      </a>
    </Link>
  );
};

export default ServiceCard;
