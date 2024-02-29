import React from "react";
import ScrollEffect from "../../ScrollEffect";
import "./about.css";
import AboutMeBg from "../../assets/AboutMeBg.jpg";

const About = () => {

  const scrollPosition = ScrollEffect();

  return (
    <section id="about">
      <div className="about_container" style={{ transform: `translateY(-${scrollPosition / 6}px)` }}>
        <div className="background-image">
          <img src={ AboutMeBg } alt="background"/>
        </div>
        
        <div className="about_me">
          <h2 className="aboutTitle">About Me</h2>

          <p className="aboutDescription">
            Graduated from Drexel with a MS degree in Information Systems in June, 2024. I have dkurftyh ksh oi;erugh nathr ipergkh;isear
          </p>
        </div>
        
      </div>
      
    </section>
  );
};

export default About;
