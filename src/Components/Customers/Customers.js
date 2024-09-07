import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar
} from "@fortawesome/free-solid-svg-icons";

import './Customers.css'

function Customers() {
  return (
    <div className="customers-container">
      
      <div className="customers-content">

        <h3>Our <span>Dhabi</span> Restaurant Happy <br/>Customers</h3>
        <p>A customer is a person or business that buys goods or services from another business. Customers are crucial because they generate revenue. Without them, businesses would go out of business.</p>
        <div className='customer-image'>
        <img src='./images/basket.png'/>
      </div>
      </div>
      <div className='card-bundle'>
      <div className="customers-card">
      <div className="image-container">
        <img src="../images/Ellipse 21.png" alt="Customer" />
      </div>
      <div className="stars">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
      <div className="customer-info">
        <p>
          A customer is a person or business that buys goods or services from another business. Customers are crucial
          because they generate revenue. Without them, businesses would go out of business.
        </p>
        <h5>Abdullah Iqbal</h5>
      </div>
    </div>
    <div className="customers-card">
      <div className="image-container">
        <img src="../images/Ellipse 20.png" alt="Customer" />
      </div>
      <div className="stars">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
      <div className="customer-info">
        <p>
          A customer is a person or business that buys goods or services from another business. Customers are crucial
          because they generate revenue. Without them, businesses would go out of business.
        </p>
        <h5>Henry john</h5>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Customers
