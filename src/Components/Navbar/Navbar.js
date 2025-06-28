import React from "react";
import "./Navbar.css";
import logo from "../../Assets/Nitin (1).png";

function Navbar() {
  return (
    <div className="navbar">
        <img src={logo} className="imgnav" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfiio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
}

export default Navbar;
