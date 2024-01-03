import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from "./assets/logo-of-the-page.png";
import "@fortawesome/fontawesome-free/css/all.css";
import "./navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [dropdown, setDropdown] = useState(false);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <nav className="container-navbar">
      <div className="content-navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img className="logo" src={LogoImage} alt="logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        {/* unordered list starts here */}
        <ul className={click ? "ul-navbar active" : "ul-navbar"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About <i className="fas fa-caret-down" />
            </Link>

            {dropdown && (
              <ul
                onClick={handleClick}
                className={click ? "dropdown-menu clicked" : "dropdown-menu"}
              >
                <li>
                  <Link
                    to="/about/our-team"
                    className="dropdown-link nav-links"
                    onClick={() => setClick(false)}
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/our-company"
                    className="dropdown-link nav-links"
                    onClick={() => setClick(false)}
                  >
                    Our Company
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/why-us"
                    className="dropdown-link nav-links"
                    onClick={() => setClick(false)}
                  >
                    Why Us
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to="/solutions"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Solutions
            </Link>
          </li>

          <li>
            <Link
              to="/codecamp"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Code Comp
            </Link>
          </li>

          <li>
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        {/* unordered list ends here */}

        {/* button of the navbar */}
        <Link className="button-in-the-navbar" to="sign-up">
          <button className="btn">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
