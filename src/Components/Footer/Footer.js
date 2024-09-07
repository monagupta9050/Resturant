import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="footer-section">
      <div>
        <div>
          <img src="../images/Frame.png" alt="Logo" />
        </div>
        <div>
          <p>
            Managing restaurant menus and other information including location
            and opening hours. Managing the preparation of orders at a
            restaurant kitchen.
          </p>
        </div>
      </div>
      <div>
        <h3>Navigation</h3>
        <ul>
          <li><a>Menu</a></li>
          <li><a>Products</a></li>
          <li><a>About Us</a></li>
          <li><a>Dish</a></li>
          <li><a>Asian</a></li>
        </ul>
      </div>
      <div>
        <h3>Genres</h3>
        <ul>
          <li><a>Salad</a></li>
          <li><a>Spicy</a></li>
          <li><a>Bowl</a></li>
          <li><a>Kitchen</a></li>
          <li><a>Home</a></li>
        </ul>
      </div>
      <div>
        <h3>Follow Us</h3>
        <div className="social-icons">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
