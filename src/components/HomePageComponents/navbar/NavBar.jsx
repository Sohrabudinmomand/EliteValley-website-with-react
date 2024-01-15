import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoImage from "./assets/logo-of-the-page.png";
import "@fortawesome/fontawesome-free/css/all.css";
import "./navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [dropdown, setDropdown] = useState(false);
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

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 992);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 992);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // make this one false

  return (
    // navbar starts here
    <nav className="container-navbar">
      {/* navbar content starts here */}
      <div className="content-navbar">
        {/* THIS ICON WILL APPEAR WHEN THE APP OPEND IN SCREEN BELOW 992PX */}
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        {/* logo */}
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img className="logo" src={LogoImage} alt="logo" />
        </Link>

        {/* unordered list starts here */}
        <ul className={click ? "ul-navbar active" : "ul-navbar"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link className="nav-links" onClick={closeMobileMenu}>
              About <i className="fas fa-caret-down" />
            </Link>

            {dropdown && (
              <ul
                onClick={handleClick}
                className={click ? "dropdown-menu clicked" : "dropdown-menu"}
              >
                <li>
                  <Link
                    to="/OurTeam"
                    className="dropdown-link nav-links"
                    onClick={() => setClick(false)}
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/OurCompany"
                    className="dropdown-link nav-links"
                    onClick={() => setClick(false)}
                  >
                    Our Company
                  </Link>
                </li>
                <li>
                  <Link
                    to="/WhyUs"
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
          {!isWideScreen && (
            <Link className="button-in-the-navbar" to="sign-up">
              <button className="btn">Sign Up</button>
            </Link>
          )}
        </ul>

        {isWideScreen && (
          <Link className="button-in-the-navbar" to="sign-up">
            <button className="btn">Sign Up</button>
          </Link>
        )}
        {/* unordered list ends here */}
      </div>
      {/* navbar content ends here */}
    </nav>
    // navbar ends here
  );
}

export default Navbar;
