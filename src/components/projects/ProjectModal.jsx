import React from "react";
import "./projects.css";

const ProjectPop = ({ project, closePop }) => {
  const handleContentClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="pop_bg" onClick={closePop}>
      <div className="pop_content" onClick={handleContentClick}>
        <div className="pop_inner_content">

          <img src={project.image} alt="Project img" className="pop_img" />

          <div className="pop_text">
            <h2 className="pop_title">{project.name}</h2>
            <p className="pop_description">{project.description}</p>
            <a className="pop_link" href={project.link} target="_blank" rel="noopener noreferrer">View Code on Github</a>
          </div>
        </div>
        <span className="pop_close" onClick={closePop}>&times;</span>
      </div>
    </div>
  );
};

export default ProjectPop;
