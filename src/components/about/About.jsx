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
            I graduated from Drexel with a MS degree in Information Systems in June, 2024. I have dkurftyh ksh oi;erugh nathr ipergkh;isear
          </p>
        </div>
        
      </div>
      
    </section>
  );
};

export default About;
