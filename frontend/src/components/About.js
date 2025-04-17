import React from "react";
import AboutImg from "../images/about-img.jpg";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>what makes our food special?</h3>
            <p>
            Our food is crafted with the finest ingredients and a passion for quality, ensuring every bite is flavorful and nourishing. We focus on freshness and authentic taste to deliver an unforgettable dining experience.
            </p>
            <p>
            Our food is special because it's made with the finest ingredients, care, and a commitment to authentic flavor in every bite.
            </p>
            <a href="#" className="btn">
              Learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
