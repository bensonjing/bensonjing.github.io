function Projects() {
  const projects = [
    {
      name: "Personal Blog",
      website: "https://bensonjing.com/blog-client/",
      github: "https://github.com/bensonjing/blog-api",
      pic: "",
    },
  ];

  return (
    <div id="projects">
      <h2>Projects</h2>
      <div id="board">
        {projects.map((project) => (
          <div class="project" key={project.name}>
            <div>{project.name}</div>
            <a href={project.website}>View Website</a>
            <a href={project.github}>View on GitHub</a>
          </div>
        ))}
      </div>
      <button>
        <a href="https://github.com/bensonjing">See more on GitHub</a>
      </button>
    </div>
  );
}

export default Projects;
