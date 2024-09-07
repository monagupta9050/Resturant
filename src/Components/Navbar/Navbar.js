import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="../images/Frame.png" alt="Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Recipe</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <div className="contact-info">
          <button className="offer-button">Special Offer</button>
          <div className="phone-info">
            <FontAwesomeIcon icon={faPhone} className="phone-icon" />
            <p>+923351263561</p>
          </div>
        </div>
        <div className="icons">
          <FontAwesomeIcon icon={faUser} className="nav-icon" />
          <FontAwesomeIcon icon={faCartShopping} className="nav-icon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
