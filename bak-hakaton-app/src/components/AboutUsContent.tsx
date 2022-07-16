import React from "react";

import { BlogType } from "../components/AboutUsInner";

// components
import AboutUsInner from "../components/AboutUsInner";
("../components/AboutUsInner");

interface Props {
  blogs: BlogType[];
}

const AboutUsContent: React.FC<Props> = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog, idx) => (
        <AboutUsInner key={blog.id} blog={blog} idx={idx} />
      ))}
    </div>
  );
};

export default AboutUsContent;
