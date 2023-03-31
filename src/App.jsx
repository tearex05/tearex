import { Link, animateScroll as scroll } from "react-scroll";
import {useState} from "react"
import Home from "./components/Home"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Socials from "./components/Socials"


function App() {
  const [style, setStyle] = useState({
    opacity1: "opacity-10",
    opacity2: "opacity-10",
    opacity3: "opacity-10",
    opacity4: "opacity-10",
    opacity5: "opacity-10",
  })
  return (
    <>
    <div className="fixed h-screen w-x2 right-0  flex flex-col items-center justify-center z-20">
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={900}
        className={`bg-white cursor-pointer hover:-translate-y-1 tran ${style.opacity1} w-3 h-3 rounded-full mb-4`}
      />
      <Link
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={0}
        duration={900}
        className={`bg-white cursor-pointer hover:-translate-y-1 tran ${style.opacity2} w-3 h-3 rounded-full mb-4`}
      />
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={0}
        duration={900}
        className={`bg-white cursor-pointer hover:-translate-y-1 tran ${style.opacity3} w-3 h-3 rounded-full mb-4`}
      />
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={900}
        className={`bg-white cursor-pointer hover:-translate-y-1 tran ${style.opacity4} w-3 h-3 rounded-full mb-4`}
      />
      <Link
        activeClass="active"
        to="socials"
        spy={true}
        smooth={true}
        offset={0}
        duration={900}
        className={`bg-white cursor-pointer hover:-translate-y-1 tran ${style.opacity5} w-3 h-3 rounded-full mb-4`}
      />
      </div>
      <div className="w-x3 min-h-screen flex flex-col items-center">
        <Home />
        <Skills />
        <Projects />
        <Contact />
        <Socials />
      </div>
    </>
  );
}

export default App;