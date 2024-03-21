import React, { useState, useEffect } from "react";
import "./nav.css";
import { IoMdHome } from "react-icons/io";
import { IoPersonSharp, IoCloseSharp} from "react-icons/io5";
import { FaGear, FaPhone } from "react-icons/fa6";
import { FaFileCode } from "react-icons/fa";
import { GiHamburgerMenu} from "react-icons/gi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const topInView = rect.top < window.innerHeight / 2;
        const bottomInView = rect.bottom > window.innerHeight / 2;
        if (topInView && bottomInView) {
          setActiveNav(`#${section.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (navId) => {
    setActiveNav(navId);
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav>
      <div className="nav_container">
        <div className="burger-icon" onClick={toggleMenu}>
          {isMenuOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
        </div>

        {isMenuOpen && <div className="overlay" onClick={toggleMenu} />}

        <div className={`nav_links ${isMenuOpen ? "active" : ""}`}>
          {window.innerWidth < 600 ? (
            <>
              <a
                href="#home"
                className={activeNav === "#home" ? "active" : ""}
                onClick={() => handleNavLinkClick("#home")}
              >
                Home
              </a>
              <a
                href="#about"
                className={activeNav === "#about" ? "active" : ""}
                onClick={() => handleNavLinkClick("#about")}
              >
                About
              </a>
              <a
                href="#skills"
                className={activeNav === "#skills" ? "active" : ""}
                onClick={() => handleNavLinkClick("#skills")}
              >
                Skills
              </a>
              <a
                href="#projects"
                className={activeNav === "#projects" ? "active" : ""}
                onClick={() => handleNavLinkClick("#projects")}
              >
                Projects
              </a>
              <a
                href="#contact"
                className={activeNav === "#contact" ? "active" : ""}
                onClick={() => handleNavLinkClick("#contact")}
              >
                Contact
              </a>
            </>
          ) : (
            <>
              <a href="#home" className={activeNav === "#home" ? "active" : ""}>
              <IoMdHome />
              </a>
              <a href="#about" className={activeNav === "#about" ? "active" : ""}>
                <IoPersonSharp />
              </a>
              <a href="#skills" className={activeNav === "#skills" ? "active" : ""}>
                <FaGear />
              </a>
              <a href="#projects" className={activeNav === "#projects" ? "active" : ""}>
                <FaFileCode />
              </a>
              <a href="#contact" className={activeNav === "#contact" ? "active" : ""}>
                <FaPhone />
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;