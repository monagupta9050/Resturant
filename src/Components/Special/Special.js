import React from "react";
import './Special.css'

function Special() {
  return (
    <div className="special-section">
      
      <div className="container">
      <div className="close-up">
        <img src="./images/close-up.png"/>
      </div>
        <h3 className="title">
          Our Delicious and Special Salad <strong>Asian</strong>
        </h3>
        <p className="special-para">
          Food is any substance consumed by an organism for nutritional support.
        </p>
      </div>
      <div className="cards-container">
        <div className="card">
          <div className="image-div">
            <img src="../images/pexels1.png" />
            <p className="code">S12</p>
            <h4>Special Salad</h4>
          </div>
          <div>
          <p className="para">Food is any substance consumed by an organism for nutritional
          support.</p>
          </div>
        </div>
        <div className="card">
          <div className="image-div">
            <img src="../images/tania.png" />
            <p className="code">S12</p>
            <h4>Russian Salad</h4>
          </div>
          <div>
            <p className="para">Food is any substance consumed by an organism for nutritional
            support.</p>
          </div>
        </div>
        <div className="card">
          <div className="image-div">
            <img src="../images/pexels1.png" />
            <p className="code">S12</p>
            <h4>Asian Salad</h4>
          </div>
          <div>
          <p className="para">Food is any substance consumed by an organism for nutritional
          support.</p>
          </div>
        </div>
        <div className="card">
          <div className="image-div">
            <img src="../images/tania.png" />
            <p className="code">S12</p>
            <h4>American Salad</h4>
          </div>
          <div>
          <p className="para">Food is any substance consumed by an organism for nutritional
          support.</p>
          </div>
        </div>
        <div className="card">
          <div className="image-div">
            <img src="../images/pexels1.png" />
            <p className="code">S12</p>
            <h4>Diet Salad</h4>
          </div>
          <div>
          <p className="para">Food is any substance consumed by an organism for nutritional
          support.</p>
          </div>
        </div>
      </div>
    <div className="leaf-image">
      <img src='./images/leaf.png'/>
    </div>
    </div>
  );
}

export default Special;
