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
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
