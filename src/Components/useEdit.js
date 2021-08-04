import { useState, useEffect } from "react";
import Firebase from "./Firebase";
const useForm = (callback, validate, client, clients) => {
  const [values, setValues] = useState({
    LastName: "",
    FirstName: "",
    StreetName: "",
    StreetNo: "",
    city: "",
    state: "",
    PhoneNumber: "",
    SocialSecurityNumber: "",
    Licenceplate: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const EditTransaction = () => {
    const db = Firebase.firestore();
    const increment = Firebase.firestore.FieldValue.increment(1);

    // Document reference
    const statsRef = db.collection("statistics").doc("numbers");

    // Update read count
    statsRef.update({ edited: increment });
  };
  const EditNrTransaction = (n) => {
    const db = Firebase.firestore();
    const increment = Firebase.firestore.FieldValue.increment(n);

    // Document reference
    const statsRef = db.collection("statistics").doc("numbers");

    // Update read count
    statsRef.update({ editedFields: increment });
  };
  const countDifferences = (newClient) => {
    let dif = 0;
    if (newClient.first_name !== client.first_name) dif += 1;
    if (newClient.last_name !== client.last_name) dif += 1;
    if (newClient.city !== client.city) dif += 1;
    if (newClient.state !== client.state) dif += 1;
    if (newClient.phone !== client.phone) dif += 1;
    if (newClient.street !== client.street) dif += 1;
    if (newClient.street_number !== client.street_number) dif += 1;
    if (newClient.cnp !== client.cnp) dif += 1;
    if (newClient.car_number !== client.car_number) dif += 1;
    return dif;
  };
  const DeleteClient = () => {
    for (let person of clients) {
      if (person.cnp === client.cnp) {
        Firebase.firestore()
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();

      let newClient = {};
      newClient.first_name = values.FirstName;
      newClient.last_name = values.LastName;
      newClient.city = values.city;
      newClient.state = values.state;
      newClient.car_number = values.Licenceplate;
      newClient.cnp = values.SocialSecurityNumber;
      newClient.phone = values.PhoneNumber;
      newClient.street = values.StreetName;
      newClient.street_number = values.StreetNo;
      EditNrTransaction(countDifferences(newClient));
      DeleteClient();
      Firebase.firestore()
        .collection("users")
        .doc(values.cnp)
        .set(newClient)
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
      EditTransaction();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;