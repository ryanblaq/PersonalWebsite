import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Header = () => (
  <header className="bg-slate-300 dark:bg-slate-950 text-slate-700 dark:text-white py-4 px-6 shadow-md">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <nav className="space-x-4 flex items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">Skills</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>
      <nav className="space-x-2 flex items-center">
        <div>
          <FontAwesomeIcon icon={faGithub} className="mr-4"></FontAwesomeIcon>       
          <Link to="https://github.com/ryanblaq" target="_blank" className="hover:underline mr-4">Github</Link>
        </div> 
        <div>
          <FontAwesomeIcon icon={faLinkedin} className="mr-4"></FontAwesomeIcon>
          <Link to="https://www.linkedin.com/in/ryan-blaquiere" target="_blank" className="hover:underline mr-4">LinkedIn</Link>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;