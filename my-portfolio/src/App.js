import "./App.css";
import Database from "./components/data/Database";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AboutMe from "./components/main/AboutMe";
import Projects from "./components/main/Projects";
import Skills from "./components/main/Skills";

function App() {
  // mapping function
  const allProjects = Database.map((singleData) => {
    console.log(singleData);
    return <Projects key={singleData.id} {...singleData} />;
  });

  return (
    <>
      <nav>
        <Header />
      </nav>
      <main>
        <AboutMe />
        <h2>My Projects</h2>
        {allProjects}
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
