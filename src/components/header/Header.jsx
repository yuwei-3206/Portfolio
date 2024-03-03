import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Calltoaction from "./Calltoaction";
import Sociallinks from "./Sociallinks";
import "./header.css";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const adj = {
    names: ["YU-WEI WU", "TAIWANESE", "A PROGRAMMER", "A DESIGNER"],
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % adj.names.length);
    }, 1800);

    return () => clearInterval(intervalId);
  }, [adj.names.length]);

  return (
    <section id="home" className="header-section">
      <header>
        <div className="container header_container">
          <h2 className="header_hello">Hello, I am</h2>
          <h5 className="names">{adj.names[currentIndex]}</h5>
          <h4>
             I'm excited to connect with you and share more about my journey, experiences, and aspirations!<br />
          </h4>
          <Calltoaction />
          <a href="#contact" className="scroll_down">
            Scroll Down <FaArrowRight />
          </a>
          <div className="social_links_container">
            <Sociallinks />
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
