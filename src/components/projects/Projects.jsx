import React, { useState } from "react";
import "./projects.css";
import ProjectList from "./ProjectList";
import ProjectBuilder from "./ProjectBuilder";
import ProjectPop from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const closePop = () => {
    setSelectedProject(null);
  };

  const openPop = (project) => {
    setSelectedProject(project);
  };

  return (
    <section id='projects' className="projects_container">
      <h5>PROJECTS</h5>
      <h2>What I have done</h2>
      <div className="project_list">{ProjectList.map((project) => createEntry(project, openPop))}</div>

      {selectedProject && (
        <ProjectPop
          project={selectedProject}
          closePop={closePop}
        />
      )}
    </section>
  );
};

function createEntry(project, openPop) {
  return (
    <ProjectBuilder
      key={project.id}
      images={project.images}
      name={project.name}
      tool={project.tool}
      description={project.description}
      onClick={() => openPop(project)}
    />
  );
}

export default Projects;
