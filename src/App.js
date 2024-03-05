import "./index.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skill from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
