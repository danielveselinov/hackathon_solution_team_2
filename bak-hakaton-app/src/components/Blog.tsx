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
          "BAK handles all of the challenges and paperwork associated with carriers, customs... "
        }
        image={imageOne.src}
        title={"What we stand for"}
        titleStyle={BLOG_STYLE.blogOne}
        path={"/about"}
      />
      <BlogInner
        text={
          "Connetinons around the world 100+units packing deleverd Custumer care 24/7"
        }
        image={imageTwo.src}
        title={"What we do"}
        titleStyle={BLOG_STYLE.blogTwo}
        path={"/mission"}
      />
      ;
    </section>
  );
};
