import React from "react";
import "./experience.css";
import { FaCheckCircle } from "react-icons/fa";

const SkillsDisplay = ({ skillsData }) => {
  return (
    <div className="skill_content">
      {skillsData.map((expertise, index) => (
        <article className="skill_details" key={index}>
          <FaCheckCircle className="skill_details-icon" />
          <div>
            <h4>{expertise.skill}</h4>
          </div>
        </article>
      ))}
    </div>
  );
};

export default SkillsDisplay;