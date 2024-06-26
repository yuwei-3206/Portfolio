import React from "react";
import "./projects.css";

function ProjectBuilder(props) {
  return (
    <div className="builder_container">
      <span className="project_image">
        <img src={props.images[0]} alt="Project img"  />
      </span>
      <span className="project_title">{props.name}</span>
      <p className="project_tool">{props.tool}</p>
      <button className="btn primaryBtn" onClick={props.onClick}>
        View Project
      </button>
    </div>
  );
}

export default ProjectBuilder;