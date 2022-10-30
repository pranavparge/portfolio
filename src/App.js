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

function App() {
  const [showMenu, setShowMenu] = React.useState(false);

  React.useEffect(() => {
    window.onscroll = () => {
      window.pageYOffset === 0 && setShowMenu(true);
      window.pageYOffset > 0 && setShowMenu(false);
    };

    return () => (window.onscroll = null);
  });

  return (
    <div className="App">
      <Navbar showMenu={showMenu} />

      <section>
        <header className="portfolio-header">
          <h1>
            Portfolio<span className="dotColor">.</span>
          </h1>
        </header>
        <Beam />
      </section>

      <section>
        <Portfolio />
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
        <About />
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
        <Projects />
        <Footer />
      </section>
    </div>
  );
}

export default App;
