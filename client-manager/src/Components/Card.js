import React from 'react';

function Card({client}) {
  return(
    
      <div>
        <h3>{client.first_name}</h3>
        <h3>{client.last_name}</h3>
        <p>{client.street}</p>
        <p>{client.street_number}</p>
        <p>{client.city}</p>
        <p>{client.state}</p>
        <p>{client.phone}</p>
        <p>{client.cnp}</p>
         <p>{client.car_number}</p>
      </div>
    
  );
}

export default Card;