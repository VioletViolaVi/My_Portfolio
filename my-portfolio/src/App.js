import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AboutMe from "./components/main/AboutMe";
import Projects from "./components/main/Projects";
import Skills from "./components/main/Skills";

function App() {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <main>
        <AboutMe />
        <h2>My Projects</h2>
        <Projects />
        <h2>My Skills</h2>
        <Skills />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
