import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Calltoaction from "./Calltoaction";
import Sociallinks from "./Sociallinks";
import "./header.css";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const adj = {
    names: ["YU-WEI WU", "TAIWANESE", "A DESIGNER", "A PROGRAMMAR"],
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ad et ratione asperiores, dignissimos
            necessitatibus dolores atque. Id eligendi a, sapiente delectus, molestias, facilis autem vero sit ducimus
            harum rem.
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
