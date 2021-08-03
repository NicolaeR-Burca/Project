import React, { useState } from "react";
import FormSignup from "./FormSignup";
import AddClient from "./AddClient";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <div className="form-content-left"></div>
        {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <AddClient />}
      </div>
    </>
  );
};

export default Form;
