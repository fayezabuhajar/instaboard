import { useState, useEffect } from "react";
import "./Navbar.css";
import TabButton from "../TabButton/TabButton.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar({ onclick, onSearch }) {
  const [darkMode, setDarkMode] = useState(true);
   const location = useLocation();
  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>INSTABOARD</h1>
      </div>

      <div className="searchbox">
        <SearchBox onSearch={onSearch} />

        <ul className="navbar-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
            >
              Team
            </NavLink>
          </li>
        </ul>
      </div>

      <ul className="navbar-links">
        {location.pathname === "/team" && (
          <li>
            <TabButton label="Load More" onClick={onclick} />
          </li>
        )}
        <li>
          <TabButton label={darkMode ? "🌞" : "🌙"} onClick={toggleTheme} />
        </li>
      </ul>

      <div className="navbar-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
