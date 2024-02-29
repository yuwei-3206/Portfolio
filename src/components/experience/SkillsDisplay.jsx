import React from "react";
import "./experience.css";
// import { FaCheckCircle } from "react-icon/bs";
import { FaCheckCircle } from "react-icons/fa";

const SkillsDisplay = ({ skillsData }) => {
  return (
    <div className="experience_content">
      {skillsData.map((expertise, index) => (
        <article className="experience_details" key={index}>
          <FaCheckCircle className="experience_details-icon" />
          <div>
            <h4>{expertise.skill}</h4>
          </div>
        </article>
      ))}
    </div>
  );
};

export default SkillsDisplay;