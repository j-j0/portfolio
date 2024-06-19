import "./App.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
      </div>
    </>
  );
}

export default App;
