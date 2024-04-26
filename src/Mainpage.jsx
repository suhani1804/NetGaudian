import React from "react";
import Logo from "./assets/Logo.png";
import "./mainpage.css";
import Lock from "./assets/Lock.svg";
import Box from "./assets/Box.svg";

const Mainpage = () => {
  return (
    <div className="outer">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <ul className="navbar-links">
          {/* <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#capabilities">Capabilities</a>
          </li>
          <li>
            <a href="#resources">Resources</a>
          </li>
          <li>
            <a href="#partners">Partners</a>
          </li> */}
        </ul>
        <button className="contact-button">Contact Us</button>
      </nav>
      <div className="main">
        <img src={Box} className="Box"/>
        <img src={Lock} className="Lock" />
        <h1 className="main-heading">Net Guardian</h1>
      </div>
      <div className="Buttons">
        <button className="button1">Request Info</button>
        <button className="button2">Get Started Now</button>
      </div>
    </div>
  );
};

export default Mainpage;
