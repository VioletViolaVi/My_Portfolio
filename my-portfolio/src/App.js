import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AboutMe from "./components/main/AboutMe";
import Projects from "./components/main/Projects";

function App() {
  return (
    <>
      <main>
        <Header />
        <AboutMe />
        <Projects />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
