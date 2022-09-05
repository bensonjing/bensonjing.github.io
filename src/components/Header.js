import resume from "../assets/resume.pdf";

function Header() {
  return (
    <div id="header">
      <h2 onClick={() => window.location.replace("#intro")}>Home</h2>
      <div id="right">
        <button onClick={() => window.location.replace("#skills")}>
          Skills
        </button>
        <button onClick={() => window.location.replace("#projects")}>
          Projects
        </button>
        <button onClick={() => window.location.replace("#contact")}>
          Contact
        </button>
        <a href={resume} target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
    </div>
  );
}

export default Header;
