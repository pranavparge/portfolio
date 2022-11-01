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
  const [activeMenu, setActiveMenu] = React.useState("portfolio");
  // const [name, setName] = React.useState("");
  const portfolioRef = React.useRef();
  const aboutRef = React.useRef();
  const projectsRef = React.useRef();

  // React.useEffect(() => {
  //   var words = ["Pranav"],
  //     part,
  //     i = 0,
  //     offset = 0,
  //     len = words.length,
  //     forwards = true,
  //     skip_count = 0,
  //     skip_delay = 15,
  //     speed = 500;
  //   setInterval(function () {
  //     if (forwards) {
  //       if (offset >= words[i].length) {
  //         ++skip_count;
  //         if (skip_count === skip_delay) {
  //           forwards = false;
  //           skip_count = 0;
  //         }
  //       }
  //     } else {
  //       if (offset === 0) {
  //         forwards = true;
  //         i++;
  //         offset = 0;
  //         if (i >= len) {
  //           i = 0;
  //         }
  //       }
  //     }
  //     part = words[i].substring(0, offset);
  //     if (skip_count === 0) {
  //       if (forwards) {
  //         offset++;
  //       } else {
  //         offset--;
  //       }
  //     }
  //     setName(part);
  //   }, speed);
  // }, []);

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
      window.location.href = "#porfolio";
      setActiveMenu("portfolio");
    } else if (
      (portfolioInView && aboutInView && !projectsInView) ||
      (!portfolioInView && aboutInView && !projectsInView)
    ) {
      window.document.title = "Pranav - About";
      window.location.href = "#about";
      setActiveMenu("about");
    } else if (
      (portfolioInView && aboutInView && projectsInView) ||
      (!portfolioInView && !aboutInView && projectsInView)
    ) {
      window.document.title = "Pranav - Projects";
      window.location.href = "#projects";
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
            {/* <span className="animate-character">{name}</span> */}
            <span className="animate-character">Pranav</span>
            <span className="dotColor">.</span>
          </h1>
        </header>
        <Beam />
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
        <Beam />
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
