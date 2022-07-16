import Image from "next/image";

// styles
import styles from "../styles/blog-inner.module.scss";

export const BlogInner = () => {
  return (
    <div className={styles["blog-inner"]}>
      <h2 className={styles["blog-inner-title-one"]}>What we do</h2>
      <div className={styles["blog-inner-content"]}>
        <div className={styles["blog-inner-desc"]}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto hic
            dignissimos ea delectus rerum vitae.
          </p>
          <a href="#">Read more</a>
        </div>
        <div className={styles["blog-inner-img-container"]}>
          <img src={"https://picsum.photos/id/237/200/300"} alt="" />
        </div>
      </div>
    </div>
  );
};
