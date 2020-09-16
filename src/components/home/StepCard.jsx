import React from "react";

const Card = ({ icon, name, step }) => (
  <div className="col-lg-4 col-xs-12">
    <div className="card text-center">
      <div className="card-icon">
        <img src={icon} alt={name} />
      </div>
      <div className="card-content">
        <p>{name}</p>
        <span>{step}</span>
      </div>
    </div>
  </div>
);

export default Card;
