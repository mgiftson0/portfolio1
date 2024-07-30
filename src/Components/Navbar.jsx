import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";

const Nav = () => {
  const [navbarblur, setnavbarblur] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      setnavbarblur(true);
    } else {
      setnavbarblur(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const showMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.toggle("barOne");
    bar[1].classList.toggle("barTwo");
    bar[2].classList.toggle("barThree");

    ham[0].classList.toggle("showNavbar");
  };

  const hideMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.remove("barOne");
    bar[1].classList.remove("barTwo");
    bar[2].classList.remove("barThree");
    ham[0].classList.remove("showNavbar");
  };

  return (
    <nav className={navbarblur ? "Navbar blur" : "Navbar"}>
      <h1
        title="Reload"
        onClick={() => window.location.reload(true)}
        className="Logo"
      >
        S
      </h1>

      <div className="Hamburger" onClick={showMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className="NavbarLinks">
        <li onClick={hideMenu}>
          <ScrollLink to="home" smooth={true} duration={500}>
            <AiOutlineHome /> Home
          </ScrollLink>
        </li>
        <li onClick={hideMenu}>
          <ScrollLink to="about" smooth={true} duration={500}>
            <BsPerson /> About
          </ScrollLink>
        </li>
        <li onClick={hideMenu}>
          <ScrollLink to="projects" smooth={true} duration={500}>
            <BsCodeSlash /> Projects
          </ScrollLink>
        </li>
        <li onClick={hideMenu}>
          <ScrollLink to="contact" smooth={true} duration={500}>
            <CgPhone /> Contact
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
