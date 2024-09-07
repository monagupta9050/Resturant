import React from 'react';
import './Subscribe.css';

function Subscribe() {
  return (
    <div 
      className="subscribe-container" 
      style={{ backgroundImage: `url('./images/jason.png')` }} 
    >
      <div className="subscribe-content">
        <p className="subscribe-text">
          Get our promo code to subscribe to our page and channel of food
        </p>
        <div className="subscribe-input-group">
          <input
            className="subscribe-input"
            placeholder="Type your email and get"
          />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
