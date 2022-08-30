function Header() {
  return (
    <div id="header">
      <h2 onClick={() => window.location.replace("#header")}>Home</h2>
      <div>
        <button onClick={() => window.location.replace("#skills")}>
          Skills
        </button>
        <button onClick={() => window.location.replace("#projects")}>
          Projects
        </button>
        <button onClick={() => window.location.replace("#contact")}>
          Contact
        </button>
        {/* TODO: link resume to file */}
        <button>Resume</button>
      </div>
    </div>
  );
}

export default Header;
