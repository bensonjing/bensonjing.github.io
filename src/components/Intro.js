import avatar from "../assets/avatar.png";

function Intro() {
  return (
    <div id="intro">
      <h1>Benson Jing</h1>
      <p>
        Software Developer & Full-Stack Developer
        <br />
        Currently a sophomore CS student at University of California, Irvine
      </p>
      <img src={avatar} alt="avatar" id="avatar" />
    </div>
  );
}

export default Intro;
