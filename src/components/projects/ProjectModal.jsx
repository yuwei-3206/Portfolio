import React from "react";
import "./projects.css";

const ProjectPop = ({ project, closePop }) => {
  return (
    <div className="pop_bg">
      <div className="pop_content">
        <span className="close" onClick={closePop}>&times;</span>
        <h2 className="pop_title">{project.name}</h2>
        <p className="pop_description">{project.description}</p>
        <img src={project.image} alt="Project img" className="pop_img"/>
      </div>
    </div>
  );
};

export default ProjectPop;
