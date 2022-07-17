import BlogInner from "./BlogInner";

import styles from "../styles/blog.module.scss";

import { BLOG_STYLE } from "./BlogInner";

import imageOne from "../../public/images/BlogImageOne.png";
import imageTwo from "../../public/images/BlogImageTwo.png";

export const Blog = () => {
  return (
    <section className={styles.blog}>
      <BlogInner
        text={
          "1 In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
        }
        image={imageOne.src}
        title={"lorem ipsum"}
        titleStyle={BLOG_STYLE.blogOne}
        path={"/about"}
      />
      <BlogInner
        text={
          "1 In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
        }
        image={imageTwo.src}
        title={"lorem ipsum"}
        titleStyle={BLOG_STYLE.blogTwo}
        path={"/mission"}
      />
      ;
    </section>
  );
};
