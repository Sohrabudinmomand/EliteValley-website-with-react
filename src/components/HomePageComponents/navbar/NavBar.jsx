// importing react to use react library and useRef hook
import React, { useRef } from "react";
// importing the icons
import { FaBars, FaTimes } from "react-icons/fa";
// importing the logo
import Logo from "./assets/logo-of-the-page.png";
// importing link from ract router dom
import { Link } from "react-router-dom";
import "./navbar.css";

// navbar starts here
function Navbar() {
  //the variable and the function below is used to toggle the navigation
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    // THE HEADER STARTS HERE
    <header className="header">
      {/* DIV BELOW USED FOR LOGO */}
      <div className="logo-box">
        <img className="logo-img" src={Logo} alt="logo" />
      </div>
      {/* THE NAVBAR STARTS HERE */}
      <nav className="navbar" ref={navRef}>
        {/* using div below to manage the navbar content with flexbox */}
        <div className="nav-content-managment">
          <Link to="/" className="a-tags-in-navbar">
            Home
          </Link>
          <Link to="/about" className="a-tags-in-navbar">
            About
          </Link>
          <Link to="/services" className="a-tags-in-navbar">
            Services
          </Link>
          <Link to="/solutions" className="a-tags-in-navbar">
            Solutions
          </Link>
          <Link to="/codecamp" className="a-tags-in-navbar">
            CodeCamp
          </Link>
          <Link to="/contact" className="a-tags-in-navbar">
            Contact
          </Link>
        </div>
        {/* close the navbar in responisve */}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
        <button className="free-quote">Free Quote</button>
      </nav>
      {/* THE NAVBAR ENDS HERE */}
      {/* display the navbar */}
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
    // THE HEADER ENDS HERE
  );
}

export default Navbar;
// navbar ends here
