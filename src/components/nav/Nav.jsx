import React, { useState, useEffect } from "react";
import "./nav.css";
import { IoMdHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveNav(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav>
      <a href="#home" className={activeNav === "#home" ? "active" : ""}>
        <IoMdHome />
      </a>
      <a href="#about" className={activeNav === "#about" ? "active" : ""}>
        <IoPersonSharp />
      </a>
      <a href="#experience" className={activeNav === "#experience" ? "active" : ""}>
        <FaGear />
      </a>
      <a href="#projects" className={activeNav === "#projects" ? "active" : ""}>
        <BsPersonWorkspace />
      </a>
      <a href="#contact" className={activeNav === "#contact" ? "active" : ""}>
        <FaPhone />
      </a>
    </nav>
  );
};

export default Nav;
