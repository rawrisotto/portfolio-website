import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuOpen = () => {
    setMenuOpen(prevState => !prevState) 
  }

  useEffect(() => {
    function handleWindowResize() {
      if (window.innerWidth > 768) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  })

  return (
    <header className="header">
      <h1 className="header__logo" onClick={() => setMenuOpen(false)}>
        <NavLink to="/">
          <FontAwesomeIcon icon={faTerminal} aria-hidden="true" /> Hidayat
        </NavLink>
      </h1>
      <button className={"hamburger" + (menuOpen ? " active" : "")} onClick={() => handleMenuOpen()}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={"nav" + (menuOpen ? " active" : "")}>
        <NavLink className="nav__links" to="projects" onClick={() => handleMenuOpen()}>
          Projects
        </NavLink>
        <NavLink className="nav__links" to="contact" onClick={() => handleMenuOpen()}>
          Contact Me
        </NavLink>
        <NavLink
          className="nav__links"
          to="https://github.com/rawrisotto"
          target="_blank"
          onClick={() => handleMenuOpen()}
        >
          <FontAwesomeIcon icon={faSquareGithub} aria-hidden="true" size="xl" />
          <span className="sr-only">GitHub</span>
        </NavLink>
        <NavLink
          className="nav__links"
          to="https://www.linkedin.com/in/mhbs-66a613282/"
          target="_blank"
          onClick={() => handleMenuOpen()}
        >
          <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" size="xl" />
          <span className="sr-only">LinkedIn</span>
        </NavLink>
        <Link
          to="https://www.dropbox.com/scl/fi/clxtogy3aj3bjn228wu02/Resume.pdf?rlkey=cycuyv89zc2vtk0quya11stvh&st=x80x1i99&dl=0"
          target="_blank"
          onClick={() => handleMenuOpen()}
        >
          <button className="btn">Resume</button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
