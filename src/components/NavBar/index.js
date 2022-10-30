import React from "react";
import "./index.css";

const Navbar = ({ showMenu }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [visible, setVisible] = React.useState("hidden");
  const [rotate, setRotate] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navbarClasses = ["navbar"];

  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  const showMenuOptions = (e) => {
    e.preventDefault();
    setRotate((prevState) => !prevState);
    setVisible(
      (prevState) => (prevState === "visible" && "hidden") || "visible"
    );
  };

  const aboutRef = React.useRef();

  const aboutInView = () => {
    window.scrollTo({
      top: 2500,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    console.log(showMenu);
    setVisible("visible");
    setRotate(true);
    setTimeout(() => {
      setVisible("hidden");
      setRotate(false);
    }, 800);
  }, [showMenu]);

  return (
    <header className={navbarClasses.join(" ")}>
      <nav className="nav1">
        Pranav Parge<span className="dot"></span>
      </nav>
      <a
        style={{
          visibility: visible,
          opacity: !rotate ? "0" : "1",
          transition: "all .5s",
        }}
        className="nav3"
        href="#projects"
      >
        Projects
      </a>
      <a
        onClick={aboutInView}
        ref={aboutRef}
        href="#about"
        style={{
          visibility: visible,
          opacity: !rotate ? "0" : "1",
          transition: "all .5s",
        }}
        className="nav3"
      >
        About
      </a>
      <nav
        className={(rotate && "nav2-rotate") || "nav2-rotate-not"}
        onClick={showMenuOptions}
      >
        +
      </nav>
    </header>
  );
};

export default Navbar;
