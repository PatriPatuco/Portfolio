import projects from "./services/ProjectsData.js";
import React, { useState } from "react";

function Work() {
  const [showInfo, setShowInfo] = useState(null);

  const handleMouseEnter = (id) => {
    setShowInfo(id);
  }

  const handleMouseLeave = () => {
    setShowInfo(null);
  }

  // Print projects
  const renderProjects = () => {
    return projects.map((project) => (
      <article key={project.id} className="work__project">
        <a className="work__project--link" href={project.link}>
          <h2
            className="work__project--title"
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
          >
            {project.name}
          </h2>
        </a>
        <p className="work__project--languages">{project.languages}</p>
        <p
          className={
            showInfo === project.id ? "show-info" : "work__project--info"
          }
        >
          {project.info}
        </p>
      </article>
    ));
  };

  return (
    <section className="work" id="work">
      <aside className="work__aside menu-left">
        <div className="menu-line"></div>
        <p>Work</p>
      </aside>
      {renderProjects()}
    </section>
  );
}
export default Work;
