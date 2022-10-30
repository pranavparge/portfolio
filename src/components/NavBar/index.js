import React from "react";
import "./index.css";

const Navbar = ({ showMenu, activeMenu }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [visible, setVisible] = React.useState("hidden");
  const [rotate, setRotate] = React.useState(false);
  const aboutRef = React.useRef();

  let navbarClasses = ["navbar"];

  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

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

  const mobileMenuOptions = (e) => {
    e.preventDefault();
    setRotate((prevState) => !prevState);
    setVisible(
      (prevState) => (prevState === "visible" && "hidden") || "visible"
    );
  };

  const aboutInView = () => {
    window.scrollTo({
      top: 2100,
      behavior: "smooth",
    });
  };

  const projectsInView = () => {};

  const portfolioInView = () => {
    window.scroll(0, 0);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  React.useEffect(() => {
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
      <a
        className={(activeMenu === "portfolio" && "nav1 underline") || "nav1"}
        href="#portfolio"
        onClick={portfolioInView}
      >
        Pranav Parge<span className="dot"></span>
      </a>
      <a
        style={{
          visibility: visible,
          opacity: !rotate ? "0" : "1",
          transition: "all .5s",
        }}
        className={(activeMenu === "projects" && "nav1 underline") || "nav1"}
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
        className={(activeMenu === "about" && "nav1 underline") || "nav1"}
      >
        About
      </a>
      <a
        href="#close"
        className={(rotate && "nav2-rotate") || "nav2-rotate-not"}
        onMouseOver={showMenuOptions}
        onMouseLeave={closeMenuOptions}
        onClick={(window.innerWidth < 768 && mobileMenuOptions) || undefined}
      >
        +
      </a>
    </nav>
  );
};

export default Navbar;
