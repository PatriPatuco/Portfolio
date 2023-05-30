import projects from "./services/ProjectsData.js";

function Work() {
const renderProjects = () => {
  return projects.map((project) =>

  <article key={project.id} className="work__project">
    <h2 className="work__project--title">{project.name}</h2>
    <p className="work__project--languages">{project.languages}</p>
    <p className="work__project--info">{project.info}</p>
    </article>
  )
}



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
