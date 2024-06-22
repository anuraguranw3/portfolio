import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MyWork from "./components/MyWork";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <MyWork />
      <Contact />
      <Footer />
    </>
  );
};

export default App;