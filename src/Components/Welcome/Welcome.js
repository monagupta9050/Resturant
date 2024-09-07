import React from 'react';
import './Welcome.css';

function Welcome() {
  return (
    <div className="welcome-container">
      <div className="img-container">
        <img src='../images/dish.png' alt="Dish" />
        <div className='circle'></div>
      </div>
      <div className="text-container">
        <h1>
          Welcome to our <strong className="highlight"><span className='diff'>Dhabi</span> Restaurant</strong>
        </h1>
        <p>
          Food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.
        </p>
        <div className="button-image-container">
          <button className='wlcm-btn'>Find more</button>
          <img src='./images/vegetable.png' alt="Vegetable" />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
