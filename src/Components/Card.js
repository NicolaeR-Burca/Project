import React from "react";
import "./Card.css";

function Card({ client }) {
  return (
    <div className="container">
      <div className="card">
        <h4
          style={{
            "text-align": "center",
            "font-weight": " bold",
          }}
        >
          {client.first_name} {client.last_name}
        </h4>
        <p>State: {client.state} </p>
        <p>City: {client.city} </p>
        <p>
          Street: {client.street} {client.street_number}
        </p>
        <p>Social Security Number: {client.cnp}</p>
        <p>Phone: {client.phone}</p>
        <p>License Plate: {client.car_number}</p>
      </div>
    </div>
  );
}

export default Card;
