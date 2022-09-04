import project1 from "../assets/project1.png";

function Projects() {
  const projects = [
    {
      name: "Personal Blog",
      website: "https://bensonjing.com/blog-client/",
      github: "https://github.com/bensonjing/blog-api",
      pic: project1,
    },
    {
      name: "Chem App",
      website: "https://chem-app-api.herokuapp.com/",
      github: "https://github.com/bensonjing/chem-app-client",
      pic: project1,
    },
  ];

  return (
    <div id="projects">
      <h2>Projects</h2>
      <div id="board">
        {projects.map((project) => (
          <div className="project" key={project.name}>
            <img src={project.pic} alt="project img"></img>
            <div>{project.name}</div>
            <div className="links">
              <a href={project.website} target="_blank" rel="noreferrer">
                View Website
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      <a
        id="github"
        href="https://github.com/bensonjing"
        target="_blank"
        rel="noreferrer"
      >
        See more on GitHub
      </a>
    </div>
  );
}

export default Projects;
