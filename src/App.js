// import logo from "./assets/react-logo.svg";
// <img src={logo} className="App-logo" alt="React logo" />
import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Arrow from "./components/Arrow";
import useIsInViewport from "./utils/InView";

function App() {
  const [showMenu, setShowMenu] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState("");
  const portfolioRef = React.useRef();
  const aboutRef = React.useRef();
  const projectsRef = React.useRef();

  React.useEffect(() => {
    window.onscroll = () => {
      window.pageYOffset === 0 && setShowMenu(true);
      window.pageYOffset > 0 && setShowMenu(false);
    };

    return () => (window.onscroll = null);
  });

  const portfolioInView = useIsInViewport(portfolioRef);
  const aboutInView = useIsInViewport(aboutRef);
  const projectsInView = useIsInViewport(projectsRef);

  React.useEffect(() => {
    if (
      (portfolioInView && !aboutInView && !projectsInView) ||
      (!portfolioInView && !aboutInView && !projectsInView)
    ) {
      window.document.title = "Pranav - Portfolio";
      window.history.pushState(null, null, "#portfolio");
      setActiveMenu("portfolio");
    } else if (
      (portfolioInView && aboutInView && !projectsInView) ||
      (!portfolioInView && aboutInView && !projectsInView)
    ) {
      window.document.title = "Pranav - About";
      window.history.pushState(null, null, "#about");
      setActiveMenu("about");
    } else if (
      (portfolioInView && aboutInView && projectsInView) ||
      (!portfolioInView && !aboutInView && projectsInView)
    ) {
      window.document.title = "Pranav - Projects";
      window.history.pushState(null, null, "#projects");
      setActiveMenu("projects");
    }
  }, [portfolioInView, aboutInView, projectsInView]);

  return (
    <div className="App">
      <Navbar showMenu={showMenu} activeMenu={activeMenu} />

      <section id="portfolio" ref={portfolioRef}>
        <header className="portfolio-header">
          <h1>
            <span className="greeting">Hi ! I Am</span>
            <br />
            <span className="animate-character">Pranav</span>
            <span className="dotColorTheme">.</span>
            <br />
            <p className="profile">
              I'm a <span className="animate-character">UI Developer</span>{" "}
              based in Pune, India<span className="dotColorTheme">.</span>
            </p>
          </h1>
        </header>
        <Arrow />
      </section>

      <section>
        <header className="projects-header">
          <h1>
            Projects<span className="dotColorTheme">.</span>
          </h1>
        </header>
        <Arrow href="#projects" style={{ cursor: "pointer" }} />
      </section>

      <section id="projects">
        <Projects projectsRef={projectsRef} />
      </section>

      <section>
        <header className="about-header">
          <h1>
            About<span className="dotColorTheme">.</span>
          </h1>
        </header>
        <Arrow href="#about" style={{ cursor: "pointer" }} />
      </section>

      <section id="about">
        <About aboutRef={aboutRef} />
        <Footer />
      </section>
    </div>
  );
}

export default App;
