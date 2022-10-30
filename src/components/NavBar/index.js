import React from "react";
import "./index.css";

const Navbar = ({ showMenu, activeMenu }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [visible, setVisible] = React.useState("hidden");
  const [rotate, setRotate] = React.useState(false);

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
      >
        Pranav Parge<span className="dot"></span>
      </a>
      <a
        className={(activeMenu === "projects" && "nav1 underline") || "nav1"}
        href="#projects"
        style={{
          visibility: visible,
          opacity: !rotate ? "0" : "1",
          transition: "all .5s",
        }}
      >
        Projects
      </a>
      <a
        className={(activeMenu === "about" && "nav1 underline") || "nav1"}
        href="#about"
        style={{
          visibility: visible,
          opacity: !rotate ? "0" : "1",
          transition: "all .5s",
        }}
      >
        About
      </a>
      <a
        className={(rotate && "nav2-rotate") || "nav2-rotate-not"}
        href="#close"
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
