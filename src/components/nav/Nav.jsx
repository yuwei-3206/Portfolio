import React, { useState, useEffect } from "react";
import "./nav.css";
import { IoMdHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { FaGear, FaPhone } from "react-icons/fa6";
import { FaFileCode } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const topInView = rect.top < window.innerHeight / 2;
        const bottomInView = rect.bottom > window.innerHeight / 2;
        if (topInView && bottomInView) {
          setActiveNav(`#${section.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="nav_container">
        <div className="burger-icon" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </div>

        
          <div className={`nav_links ${isMenuOpen ? "active" : ""}`}>
            <a href="#home" className={activeNav === "#home" ? "active" : ""}>
              <IoMdHome />
            </a>
            <a href="#about" className={activeNav === "#about" ? "active" : ""}>
              <IoPersonSharp />
            </a>
            <a href="#skills" className={activeNav === "#skills" ? "active" : ""}>
              <FaGear />
            </a>
            <a href="#projects" className={activeNav === "#projects" ? "active" : ""}>
              <FaFileCode />
            </a>
            <a href="#contact" className={activeNav === "#contact" ? "active" : ""}>
              <FaPhone />
            </a>
          </div>
        
      </div>
    </nav>
  );
};

export default Nav;

/** useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveNav(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5, rootMargin: "0px 0px -200px 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);*/