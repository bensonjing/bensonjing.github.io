function Header() {
  const goToContact = (e) => {
    e.preventDefault();
    window.location.replace("/#contact");
  };

  return (
    <div id="header">
      <div>BJ</div>
      <div>
        <a href="https://github.com/bensonjing" target="_blank">
          GitHub
        </a>
        <div onClick={(e) => goToContact(e)}>Contact Me</div>
      </div>
    </div>
  );
}

export default Header;
