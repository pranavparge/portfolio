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
    setRotate(true);
    setVisible("visible");
  };

  const closeMenuOptions = (e) => {
    e.preventDefault();
    setRotate(false);
    setVisible("hidden");
  };

  const aboutRef = React.useRef();

  const aboutInView = () => {
    setVisible("hidden");
    setRotate(false);
    window.scrollTo({
      top: 2100,
      behavior: "smooth",
    });
  };

  const projectsInView = () => {
    setVisible("hidden");
    setRotate(false);
  };

  const portfolioInView = () => {
    window.scroll(0, 0);
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
    <nav
      className={navbarClasses.join(" ")}
      onMouseOver={showMenuOptions}
      onMouseLeave={closeMenuOptions}
    >
      <a className="nav1" href="#portfolio" onClick={portfolioInView}>
        Pranav Parge<span className="dot"></span>
      </a>
      <a
        style={{
          visibility: visible,
          opacity: !rotate ? "0" : "1",
          transition: "all .5s",
        }}
        className="nav1"
        href="#projects"
        onClick={projectsInView}
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
        className="nav1"
      >
        About
      </a>
      <nav
        className={(rotate && "nav2-rotate") || "nav2-rotate-not"}
        onMouseOver={showMenuOptions}
        onMouseLeave={closeMenuOptions}
      >
        +
      </nav>
    </nav>
  );
};

export default Navbar;
