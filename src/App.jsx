import About from "./components/About";
import Contact from "./components/Contact";
import DSA from "./components/DSA";
import Hero from "./components/Hero";
import Learning from "./components/Learnings";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


export default function App() {
  return (
    <>
    {/* <Navbar/> */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Learning />
      <DSA />
      <Contact />
    </>
  );
}
