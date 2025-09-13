import gsap from "gsap";
// import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { ScrollTrigger } from "gsap/all";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const App = () => {

  gsap.registerPlugin(ScrollTrigger);
  return (
    <>
      <Header />
      <Hero />
      {/* <About /> */}
      <Skills />
      <Projects />
    </>
  );
};

export default App;