import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);

  // On mount, set initial mode from localStorage
  useEffect(() => {
    document.documentElement.classList.add("dark");
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <header className="bg-slate-300 dark:bg-slate-950 text-slate-700 dark:text-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <nav className="space-x-4 flex items-center">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">Skills</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>

        <div className="flex items-center space-x-4">
          {/* External links */}
          <a href="https://github.com/ryanblaq" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center space-x-1">
            <FontAwesomeIcon icon={faGithub} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/ryan-blaquiere" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center space-x-1">
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          {/* Dark mode toggle */}
          <button onClick={toggleDarkMode} className="ml-2 hover:text-blue-500" title="Toggle Dark Mode">
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;