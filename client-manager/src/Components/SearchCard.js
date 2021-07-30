import React from 'react';
import './SearchCard.css';

function SearchCard({ client }) {
  return (

    <div className="container">
      <div className="searchcard">
        <h3>First name: {client.first_name} Last name: {client.last_name}</h3>
        <p>State: {client.state} City: {client.city} </p>
        <p>Street: {client.street} {client.street_number}</p>
        <p>Social Security Number: {client.cnp}</p>
        <p>Phone: {client.phone}</p>
        <p>License Plate: {client.car_number}</p>
      </div>
    </div>


  );
}

export default SearchCard;