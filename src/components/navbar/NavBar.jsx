import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logo-of-the-page.png";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
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
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
        <button className="free-quote">Free Quote</button>
      </nav>
      {/* THE NAVBAR ENDS HERE */}
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
    // THE HEADER ENDS HERE
  );
}

export default Navbar;
