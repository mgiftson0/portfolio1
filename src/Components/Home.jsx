import { Link as ScrollLink, Element } from "react-scroll";
import Type from "./Type.jsx";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/Avatar.png";
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
import About from "./About";
import Contact from "./Contact";
// import Skills from "./Skills";
import Projects from "./Projects";
// import ProjectBox from "./ProjectBox";
// import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>hello there!</h1>
          <h1>
            Im <b>sabali</b>
          </h1>
          <Type />
          <div className="buttons">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="button"
              offset={-100}
            >
              About Me
              <BsPerson />
            </ScrollLink>

            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="button"
              offset={-100}
            >
              Contact <CgPhone />
            </ScrollLink>
          </div>
        </div>
        <Tilt>
          <img className="Avatar" src={Avatar} alt="" />
        </Tilt>
      </div>

      {/* Dividers for each section */}
      <div className="section-divider">
        <h2 className="section-heading">About Me</h2>
      </div>
      <Element name="about">
        <About />
      </Element>
      <div className="section-divider">
        <h2 className="section-heading">Projects</h2>
      </div>
      <Element name="projects">
        <Projects />
      </Element>
      <div className="section-divider">
        <h2 className="section-heading">Contact</h2>
      </div>
      <Element name="contact">
        <Contact />
      </Element>
      
    </div>
  );
};

export default Home;
