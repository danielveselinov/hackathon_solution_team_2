import React from "react";

import styles from "../styles/HeaderStyles/mainTitle.module.scss";
export default function MainTitle() {
  return (
    <div>
      <h2 className={styles.MainTitle}>
        <span className={styles.firstTitleSection}>Your secure</span>connection
        <br /> to the enitre
        <span className={styles.secondTitleSection}>world.</span>
      </h2>
    </div>
  );
}
