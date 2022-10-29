import React from "react";
import "./index.css";

const Navbar = () => {
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

  const showMenu = (e) => {
    e.preventDefault();
    setRotate((prevState) => !prevState);
    setVisible(
      (prevState) => (prevState === "visible" && "hidden") || "visible"
    );
  };

  return (
    <header className={navbarClasses.join(" ")}>
      <nav className="nav1">Pranav Parge</nav>
      <nav
        style={{
          visibility: visible,
          opacity: !rotate ? "0" : "1",
          transition: "all .5s",
        }}
        className="nav3"
      >
        Projects
      </nav>
      <nav style={{ visibility: visible }} className="nav3">
        About
      </nav>
      <nav
        className={(rotate && "nav2-rotate") || "nav2-rotate-not"}
        onClick={showMenu}
      >
        +
      </nav>
    </header>
  );
};

export default Navbar;
