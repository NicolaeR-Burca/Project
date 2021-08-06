import { useState, useEffect } from "react";
import Firebase from "./Firebase";
const useForm = (callback, validate) => {
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
  const [firstClient, setFirstClient] = useState({});
  const [userCount, setUserCount] = useState(0);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const AddTransaction = () => {
    const db = Firebase.firestore();
    const increment = Firebase.firestore.FieldValue.increment(1);

    const statsRef = db.collection("statistics").doc("numbers");

    statsRef.update({ added: increment });
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

  const NewClientAdd = () => {
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
    newClient.timestamp = Firebase.firestore.FieldValue.serverTimestamp();
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
  };

  const DeleteTransaction = () => {
    const db = Firebase.firestore();
    const increment = Firebase.firestore.FieldValue.increment(1);
    const statsRef = db.collection("statistics").doc("numbers");
    statsRef.update({ deleted: increment });
  };

  const DeleteFirstClient = () => {
    console.log("in delete");

    if (userCount > 10) {
      console.log(firstClient.id);
      Firebase.firestore()
        .collection("users")
        .doc(firstClient.id)
        .delete()
        .then(() => {
          console.log("Client successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
      DeleteTransaction();
    }
  };

  useEffect(() => {
    const db = Firebase.firestore();
    const sorted = db.collection("users").orderBy("timestamp").limit(25);

    sorted.get().then((documentSnapshots) => {
      // Get the last visible document
      var firstVisible = documentSnapshots.docs[0];
      var count = documentSnapshots.docs.length;
      setUserCount(count);
      setFirstClient(firstVisible);
      console.log("first : ", firstVisible);
      console.log("count: " + count);
    });
  }, []);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      NewClientAdd();
      AddTransaction();
      DeleteFirstClient();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
