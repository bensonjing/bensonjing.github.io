function Header() {
  return (
    <div id="header">
      <div onClick={() => window.location.replace("#header")}>Home</div>
      <div>
        <div onClick={() => window.location.replace("#skills")}>Skills</div>
        <div onClick={() => window.location.replace("#projects")}>Projects</div>
        <div onClick={() => window.location.replace("#contact")}>Contact</div>
        {/* TODO: link resume to file */}
        <div>Resume</div>
      </div>
    </div>
  );
}

export default Header;
