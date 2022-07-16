import React from "react";

// styles
import styles from "../styles/about-us-inner.module.scss";

export interface BlogType {
  id: string;
  text: string;
  image1: string;
  image2: string;
}

type Props = {
  blog: BlogType;
  idx: number;
};

const AboutUsInner: React.FC<Props> = ({ blog, idx }) => {
  const { id, image1, image2, text } = blog;
  return (
    <div className={styles["about-us-inner-container"]}>
      <div
        className={`${styles["about-us-flex-container"]} ${
          idx % 2 !== 0 && `${styles["about-us-flex-container-reverse"]}`
        }`}
      >
        <div className={styles["text-container"]}>
          <p>{text}</p>
        </div>
        <div className={styles["image-container"]}>
          <img src={image1} alt={id} />
          <img src={image2} alt={id} />
        </div>
      </div>
    </div>
  );
};

export default AboutUsInner;
