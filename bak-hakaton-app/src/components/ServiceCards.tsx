import React from "react";

// styles
import styles from "../styles/service-cards.module.scss";
import ServiceCard from "./ServiceCard";

import serviceOne from "../../public/images/serviceCardOne.jpg";
import serviceTwo from "../../public/images/serviceCardTwo.jpg";
import serviceThree from "../../public/images/serviceCardThree.jpg";
import serviceFour from "../../public/images/serviceCardFour.jpg";

interface ServiceCardType {}

interface Props {}

const ServiceCards: React.FC<Props> = () => {
  return (
    <section className={styles["service-cards"]}>
      <h2 className={styles["title"]}>Services</h2>
      <div className={styles["service-cards-container"]}>
        {/* <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard /> */}
        <ServiceCard
          path={"/land-freight"}
          img={serviceOne.src}
          desc={"Lorem ipsum dolor sit."}
          title={"Land Freight"}
        />
        <ServiceCard
          path={"/water-freight"}
          img={serviceTwo.src}
          desc={"Lorem ipsum dolor sit."}
          title={"Water Freight"}
        />
        <ServiceCard
          path={"/air-freight"}
          img={serviceThree.src}
          desc={"Lorem ipsum dolor sit."}
          title={"Air Freight"}
        />
        <ServiceCard
          path={"/warehouse-storage"}
          img={serviceFour.src}
          desc={"Lorem ipsum dolor sit."}
          title={"Warehouse Storage"}
        />
      </div>
    </section>
  );
};

export default ServiceCards;
