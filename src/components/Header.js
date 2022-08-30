function Header() {
  const goToHome = (e) => {
    window.location.replace("/#header");
  };

  const goToContact = (e) => {
    e.preventDefault();
    window.location.replace("/#contact");
  };

  return (
    <div id="header">
      <div onClick={(e) => goToHome(e)}>Home</div>
      <div>
        <div onClick={(e) => goToContact(e)}>Contact Me</div>
      </div>
    </div>
  );
}

export default Header;
