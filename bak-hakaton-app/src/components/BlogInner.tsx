/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

// styles
import styles from "../styles/blog-inner.module.scss";

export const BLOG_STYLE = {
  blogOne: "blog-inner-title-one",
  blogTwo: "blog-inner-title-two",
};

interface Props {
  image: string;
  text: string;
  title: string;
  titleStyle: string;
  path: string;
}

const BlogInner: React.FC<Props> = ({
  image,
  text,
  title,
  titleStyle,
  path,
}) => {
  return (
    <div className={styles["blog-inner"]}>
      <h2 className={styles[titleStyle]}>{title}</h2>
      <div className={styles["blog-inner-content"]}>
        <div className={styles["blog-inner-desc"]}>
          <p>{text}</p>
          <Link href={path}>
            <a href="#">Read more</a>
          </Link>
        </div>
        <div className={styles["blog-inner-img-container"]}>
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default BlogInner;
