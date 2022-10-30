// import logo from "./logo.svg";
// <img src={logo} className="App-logo" alt="logo" />

import "./App.css";
import Navbar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section>
        <header className="portfolio-header">
          <h1>
            Portfolio<span className="dotColor">.</span>
          </h1>
        </header>
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
      </section>
      <section id="projects">
        <Projects />
        <Footer />
      </section>
    </div>
  );
}

export default App;
