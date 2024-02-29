import React from "react";
import "./projects.css";

function ProjectBuilder(props) {
  return (
    <div className="container">
      <span className="image">
        <img src={props.image} alt="Project img" />
      </span>
      <span className="title">{props.name}</span>
      <p className="tool">{props.tool}</p>
      <button className="btn" onClick={props.onClick}>
        View Project
      </button>
    </div>
  );
}

export default ProjectBuilder;