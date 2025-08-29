import {ReactLenis} from 'lenis/react';
import About from "./components/About";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skill from "./components/Skill";

function App() {

  return (
    <ReactLenis root>      
     <Header/>
     <main>
      <Hero/>
      <About/>
      <Education/>
      <Skill/>
      <Projects/>
      <Achievements/>
      <Contact/>
      <Footer/>
     </main>
    
    </ReactLenis>
  )
}

export default App
