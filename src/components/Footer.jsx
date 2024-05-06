import { Link } from "react-router-dom"
import { faGithub, faLinkedinIn, faSteam, faDiscord } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  return (
    <footer>
        <div className="socials-wrapper">
            <Link to="https://github.com/rawrisotto" target="_blank"><FontAwesomeIcon icon={faGithub} aria-hidden="true" /><span className="sr-only">GitHub</span></Link>
            <Link to="https://www.linkedin.com/in/mhbs-66a613282/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" /><span className="sr-only">LinkedIn</span></Link>
            <Link to="https://steamcommunity.com/id/rawrisotto/" target="_blank"><FontAwesomeIcon icon={faSteam} aria-hidden="true" /><span className="sr-only">Steam</span></Link>
            <Link to="https://discordapp.com/users/390490614132637698" target="_blank"><FontAwesomeIcon icon={faDiscord} aria-hidden="true" /><span className="sr-only">Discord</span></Link>
        </div>
        &copy; Muhammad Hidayat Bin Salaman 2024
    </footer>
  )
}

export default Footer