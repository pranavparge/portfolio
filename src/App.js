// import logo from "./logo.svg";
// <img src={logo} className="App-logo" alt="logo" />
import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
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
      // window.document.location.href = "#porfolio"; not working with chrome / safari
      setActiveMenu("portfolio");
    } else if (
      (portfolioInView && aboutInView && !projectsInView) ||
      (!portfolioInView && aboutInView && !projectsInView)
    ) {
      window.document.title = "Pranav - About";
      // window.document.location.href = "#about";
      setActiveMenu("about");
    } else if (
      (portfolioInView && aboutInView && projectsInView) ||
      (!portfolioInView && !aboutInView && projectsInView)
    ) {
      window.document.title = "Pranav - Projects";
      // window.document.location.href = "#projects";
      setActiveMenu("projects");
    }
  }, [portfolioInView, aboutInView, projectsInView]);

  return (
    <div className="App">
      <Navbar showMenu={showMenu} activeMenu={activeMenu} />

      <section>
        <header className="portfolio-header">
          <h1>
            <span className="greeting">Hi ! I Am</span>
            <br />
            <span className="animate-character">Pranav</span>
            <span className="dotColor">.</span>
          </h1>
        </header>
        <Arrow />
      </section>

      <section id="portfolio">
        <Portfolio portfolioRef={portfolioRef} />
      </section>

      <section>
        <header className="about-header">
          <h1>
            About<span className="dotColorTheme">.</span>
          </h1>
        </header>
        <Arrow />
      </section>

      <section id="about">
        <About aboutRef={aboutRef} />
      </section>

      <section>
        <header className="projects-header">
          <h1>
            Projects<span className="dotColorTheme">.</span>
          </h1>
        </header>
        <Arrow />
      </section>

      <section id="projects">
        <Projects projectsRef={projectsRef} />
        <Footer />
      </section>
    </div>
  );
}

export default App;
