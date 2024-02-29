import React, { useRef, useEffect, useState } from "react";
import "./experience.css";
import ScrollEffect from "../../ScrollEffect";
// import { FaCheckCircle } from "react-icon/bs";
// import { FaCheckCircle } from "react-icons/fa";
import SkillsDisplay from "./SkillsDisplay";

const Experience = () => {

  const scrollPosition = ScrollEffect();


  const designSkillsData = [
    { skill: "Photoshop"},
    { skill: "Illustrator"},
    { skill: "InDesign"},
    { skill: "Figma"},
  ];

  const frontEndSkillsData = [
    { skill: "HTML"},
    { skill: "CSS"},
    { skill: "JavaScript"},
    { skill: "React"},
  ];

  const backendSkillsData = [
    { skill: "PL/SQL"},
    { skill: "Python"},
    { skill: "Java"},
    { skill: "C/C++"},
    { skill: "Node.js"},
  ];

  return (
    <section id="experience" className="experience" 
      style={{ backgroundColor: "white", marginTop: `-${scrollPosition / 2.5}px` }}>
      <h5>SKILLS</h5>
      <h2>My Skills</h2>
      
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Design</h3>
          <SkillsDisplay skillsData={designSkillsData} />
        </div>

        <div className="experience_frontend">
          <h3>Frontend</h3>
          <SkillsDisplay skillsData={frontEndSkillsData} />
        </div>

        <div className="experience_backend">
          <h3>Backend</h3>
          <SkillsDisplay skillsData={backendSkillsData} />
        </div>
      </div>
    </section>
  );
};

export default Experience;