import React, { useState } from "react";
import EditSignup from "./EditSignup";
import EditForm from "./EditForm";

const Form = ({ client, clients }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <div className="form-content-left"></div>
        {!isSubmitted ? (
          <EditSignup
            submitForm={submitForm}
            client={client}
            clients={clients}
          />
        ) : (
          <EditForm />
        )}
      </div>
    </>
  );
};

export default Form;
