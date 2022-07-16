import Image from "next/image";

// styles
import styles from "../styles/blog-inner.module.scss";

export interface BlogType {
  id: string;
  title: string;
  text: string;
  image: string;
}

interface Props {
  blog: BlogType;
  idx: number;
}

const BlogInner: React.FC<Props> = ({ blog, idx }) => {
  const { image, text, title } = blog;
  return (
    <div className={styles["blog-inner"]}>
      <h2
        className={`${
          idx % 2 === 0
            ? styles["blog-inner-title-one"]
            : styles["blog-inner-title-two"]
        }`}
      >
        {title}
      </h2>
      <div className={styles["blog-inner-content"]}>
        <div className={styles["blog-inner-desc"]}>
          <p>{text}</p>
          <a href="#">Read more</a>
        </div>
        <div className={styles["blog-inner-img-container"]}>
          <img
            src={`https://5884-46-217-247-67.eu.ngrok.io/storage/${image}`}
            alt={title}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogInner;
