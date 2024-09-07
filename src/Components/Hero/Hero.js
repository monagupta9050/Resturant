import React from 'react';
import "./Hero.css"

function Hero() {
  return (
    <div className="hero-container" style={{ backgroundImage: `url('./images/Group 8.png')` }} >
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            All Delicious <strong>Asian</strong>
          </h1>
          <p>Eggs, Salad, fruits, pasta</p>
          <button className='btn'>Find For More</button>
        </div>
        <div className='hero-image' >
          <img className='hero-circle-image' src='./images/Ellipse 6.png'/>
          <img src="../images/salad.png" alt="Salad" />
          
        </div>
        <div className='clipy-path'>
          <img src='./images/Rectangle.png'/>
        </div>
        
      </div>
      <div className='icon-image'>
          <img src='./images/Group 7.png'/>
        </div>
    </div>
  );
}

export default Hero;
