import React from "react";
import ScrollEffect from "../../ScrollEffect";
import "./about.css";
import AboutMeBg from "../../assets/AboutMeBg.jpg";

const About = () => {

  const scrollPosition = ScrollEffect();

  let translateY = scrollPosition / 6;

  if (window.innerWidth <= 1040 && window.innerWidth > 600) {
    translateY = scrollPosition / 4.5;
  } else if (window.innerWidth <= 600) {
    translateY = scrollPosition / 2;
  }

  return (
    <section id="about">
      <div className="about_container" style={{ transform: `translateY(-${translateY}px)` }}>
        <div className="background_img">
          <img src={ AboutMeBg } alt="background"/>
        </div>
        
        <div className="about_me">
          <h2 className="about_title">About Me</h2>

          <p className="about_description">
            Hello, I'm Yu-Wei, a recent graduate from Drexel University with a MS degree in Information Systems. <br /><br />
            My journey into the Technology began after completing my Bachelor's degree in Design. This background helps me think creatively and solve problems in all aspects of life. <br /><br />
            One of my experiences includes taking on a 6 months solo journey, during which I navigated through unfamiliarities and embraced unforeseen challenges with confidence.<br /><br /> 
            With a strong foundation in adaptability and problem-solving, I am also known for my ability to quickly grasp new concepts and adapt to new environments.
          </p>
        </div>
        
      </div>
      
    </section>
  );
};

export default About;
