import React from "react";
import { blog } from "../Data";
const Blog = () => {
  return (
    <>
      <section class="blogs" id="blogs">
        <h1 class="heading">
          our <span>blogs</span>
        </h1>

        <div class="box-container">
          {blog.map((item, index) => (
            <div class="box" key={index * Math.random()}>
              <div class="image">
                <img src={item.img} alt="" />
              </div>
              <div class="content">
                <a href="#" class="title">
                {item.Heading}
                </a>
                <span>by admin / {item.Date}</span>
                <p>
                Our dishes are infused with tasty, refreshing spices that bring vibrant flavors to every bite.
                </p>
                <a href="#" class="btn">
                  read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
