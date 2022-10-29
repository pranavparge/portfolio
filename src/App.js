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
      <Navbar></Navbar>
      <header className="Portfolio-header">
        <h1 className="headerBackground">Portfolio</h1>
      </header>
      <Portfolio></Portfolio>
      <header className="About-header">
        <h1 className="headerBackground">About</h1>
      </header>
      <About></About>
      <header className="Projects-header">
        <h1 className="headerBackground">Projects</h1>
      </header>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
