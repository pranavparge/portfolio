// import logo from "./logo.svg";
// <img src={logo} className="App-logo" alt="logo" />
import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Beam from "./components/Beam";
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
      setActiveMenu("portfolio");
    } else if (
      (portfolioInView && aboutInView && !projectsInView) ||
      (!portfolioInView && aboutInView && !projectsInView)
    ) {
      window.document.title = "Pranav - About";
      setActiveMenu("about");
    } else if (
      (portfolioInView && aboutInView && projectsInView) ||
      (!portfolioInView && !aboutInView && projectsInView)
    ) {
      window.document.title = "Pranav - Projects";
      setActiveMenu("projects");
    }
  }, [portfolioInView, aboutInView, projectsInView]);

  return (
    <div className="App">
      <Navbar showMenu={showMenu} activeMenu={activeMenu} />

      <section>
        <header className="portfolio-header">
          <h1>
            Portfolio<span className="dotColor">.</span>
          </h1>
        </header>
        <Beam />
      </section>

      <section>
        <Portfolio portfolioRef={portfolioRef} />
      </section>

      <section>
        <header className="about-header">
          <h1>
            About<span className="dotColor">.</span>
          </h1>
        </header>
        <Beam />
      </section>

      <section id="about">
        <About aboutRef={aboutRef} />
      </section>

      <section>
        <header className="projects-header">
          <h1>
            Projects<span className="dotColor">.</span>
          </h1>
        </header>
        <Beam />
      </section>

      <section id="projects">
        <Projects projectsRef={projectsRef} />
        <Footer />
      </section>
    </div>
  );
}

export default App;
