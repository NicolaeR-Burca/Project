import React, { useState } from "react";
import "./SearchCard.css";
import Firebase from "./Firebase";
import EditForm from "./EditForm";

function SearchCard({ client, clients }) {
  const [isEditing, setIsEditing] = useState(false);

  const DeleteTransaction = () => {
    const db = Firebase.firestore();
    const increment = Firebase.firestore.FieldValue.increment(1);

    // Document reference
    const statsRef = db.collection("statistics").doc("numbers");

    // Update read count
    statsRef.update({ deleted: increment });
  };
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
        DeleteTransaction();
      }
    }
  };

  const EditClient = () => {
    setIsEditing(true);
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
        <button onClick={DeleteClient}>Delete </button>{" "}
        <button onClick={EditClient}>Edit </button>
      </div>
      {isEditing && <EditForm client={client} clients={clients} />}
    </div>
  );
}

export default SearchCard;
