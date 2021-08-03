import React from "react";
import "./SearchCard.css";
import Firebase from "./Firebase";

function SearchCard({ client, clients }) {
  const DeleteClient = () => {
    for (let person of clients) {
      if (person.cnp === client.cnp) {
        let deleted = Firebase.firestore()
          .collection("users")
          .doc(person.id)
          .delete()
          .then(() => {
            console.log("Client successfully deleted!");
          })
          .catch((error) => {
            console.error("Error removing document: ", error);
          });
      }
    }
  };
  return (
    <div className="container">
      <div className="searchcard">
        <h3>
          First name: {client.first_name} Last name: {client.last_name}
        </h3>
        <p>
          State: {client.state} City: {client.city}
        </p>
        <p>
          Street: {client.street} {client.street_number}
        </p>
        <p>Social Security Number: {client.cnp}</p>
        <p>Phone: {client.phone}</p>
        <p>License Plate: {client.car_number}</p>
        <button onClick={DeleteClient}>Delete </button>
      </div>
    </div>
  );
}

export default SearchCard;
