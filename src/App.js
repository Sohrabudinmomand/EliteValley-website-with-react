import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import CodeCamp from "./pages/CodeComp"; // Corrected import path
import Contact from "./pages/Contact";
import Navbar from "./components/HomePageComponents/navbar/NavBar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/codecamp" element={<CodeCamp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}


export default App;
