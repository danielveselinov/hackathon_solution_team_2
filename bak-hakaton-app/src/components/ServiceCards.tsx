import React from "react";

// styles
import styles from "../styles/service-cards.module.scss";
import ServiceCard from "./ServiceCard";

interface ServiceCardType {}

interface Props {}

const ServiceCards: React.FC<Props> = () => {
  return (
    <section className={styles["service-cards"]}>
      <h2 className={styles["title"]}>Services</h2>
      <div className={styles["service-cards-container"]}>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </section>
  );
};

export default ServiceCards;
