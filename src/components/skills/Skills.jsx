import React from "react";
import "./skills.css";
import ScrollEffect from "../../ScrollEffect";
import SkillsDisplay from "./SkillsDisplay";

const Skill = () => {

  const scrollPosition = ScrollEffect();

  let translateY = scrollPosition / 2.5;

  if (window.innerWidth <= 1040 && window.innerWidth > 600) {
    translateY = scrollPosition / 5;
  } else if (window.innerWidth <= 600) {
    translateY = scrollPosition / 50;
  }

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
    <section id="skills" className="skill" 
      style={{ backgroundColor: "white", marginTop: `-${translateY}px` }}>
      <h5>SKILLS</h5>
      <h2>What I can do</h2>
      
      <div className="skill_container">
        <div>
          <h3>Design</h3>
          <SkillsDisplay skillsData={designSkillsData} />
        </div>

        <div>
          <h3>Frontend</h3>
          <SkillsDisplay skillsData={frontEndSkillsData} />
        </div>

        <div>
          <h3>Backend</h3>
          <SkillsDisplay skillsData={backendSkillsData} />
        </div>
      </div>
    </section>
  );
};

export default Skill;