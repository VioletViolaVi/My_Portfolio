import "./App.css";
import Header from "./components/header/Header";
import AboutMe from "./components/main/AboutMe";
import Projects from "./components/main/Projects";

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <header>
        <h2>Projects</h2>
      </header>
      <Projects />
    </>
  );
}

export default App;
