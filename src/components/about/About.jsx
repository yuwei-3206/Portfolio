import React from "react";
import ScrollEffect from "../../ScrollEffect";
import "./about.css";
import AboutMeBg from "../../assets/AboutMeBg.jpg";
import Sociallinks from "../header/Sociallinks";

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
            Hello, I'm Yu-Wei. I'm a Taiwanese designer and programmer. <br /><br />
            As a recent graduate from Drexel University with a MS degree in Information Systems, and a former UI Graphic Designer, I've become deeply interested in all aspects of web development. From front-end, user-experienced, aesthetics to back-end, unseen, functionality.<br /><br />
            It's not only about the visual design; creating and implementing the functional aspects of a project are equally crucial. A great project brings together both aspects to deliver a satisfying user experience.<br /><br />
          </p>
          <div className="social_links_about">
            <Sociallinks />
          </div>
        </div>
        
      </div>
      
    </section>
  );
};

export default About;
