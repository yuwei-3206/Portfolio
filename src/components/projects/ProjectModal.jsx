import React from "react";
import "./projects.css";

const ProjectPop = ({ project, closePop }) => {
  const handleContentClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="pop_bg" onClick={closePop}>
      <div className="pop_content" onClick={handleContentClick}>
        <span className="pop_close" onClick={closePop}>&times;</span>
        <h2 className="pop_title">{project.name}</h2>
        <p className="pop_description">{project.description}</p>
        <img src={project.image} alt="Project img" className="pop_img"/>
      </div>
    </div>
  );
};

export default ProjectPop;
