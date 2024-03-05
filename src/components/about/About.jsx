import React from "react";
import ScrollEffect from "../../ScrollEffect";
import "./about.css";
import AboutMeBg from "../../assets/AboutMeBg.jpg";

const About = () => {

  const scrollPosition = ScrollEffect();

  const translateY = scrollPosition / 6;

  const mediaQueryStyles = `
    @media screen and (max-width: 1040px) {
      .about_container {
        transform: translateY(-${translateY / 5}px);
      }
    }

    @media screen and (max-width: 600px) {
      .about_container {
        transform: translateY(-${translateY / 18}px);
      }
    }
  `;

  const styleElement = document.createElement('style');
  styleElement.innerHTML = mediaQueryStyles;
  document.head.appendChild(styleElement);

  return (
    <section id="about">
      <div className="about_container" style={{ transform: `translateY(-${translateY}px)` }}>
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
