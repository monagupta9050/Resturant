import React from 'react';
import './Chef.css'

function Chef() {
  return (
    <div className="chef-container">
      <div className='chef-one-image'>
        {/* <img src='./images/white-vegetable.png'/> */}
      </div>
      <div className="chef-text">
        <h1>
          Our <span className='diff'>Dhabi</span>
          <br />
          Restaurant Expert<br />
          <span className="expert">Chef</span>
        </h1>
        <p>
          Food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.
        </p>
      </div>
      <div className="chef-image">
        <img className='chef-circle' src='./images/Ellipse 6.png'/>
        <img src='../images/chef.png' alt="Chef" />
      </div>
    </div>
  );
}

export default Chef;
