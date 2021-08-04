import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>Fill the following form to add a new client </h1>
        <div className="form-inputs">
          <label className="form-label">First Name</label>
          <input
            id="First-Name"
            type="text"
            name="FirstName"
            className="form-input"
            placeholder="Enter your First Name"
            value={values.FirstName}
            onChange={handleChange}
          />
          {errors.FirstName && <p>{errors.FirstName}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Last Name</label>
          <input
            id="Last-Name"
            type="text"
            name="LastName"
            className="form-input"
            placeholder="Enter your Last Name"
            value={values.LastName}
            onChange={handleChange}
          />
          {errors.LastName && <p>{errors.LastName}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Street Name</label>
          <input
            id="Street-Name"
            type="text"
            name="StreetName"
            className="form-input"
            placeholder="Enter your Street Name"
            value={values.StreetName}
            onChange={handleChange}
          />
          {errors.StreetName && <p>{errors.StreetName}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Street Number</label>
          <input
            id="Street-No"
            type="text"
            name="StreetNo"
            className="form-input"
            placeholder="Enter your Street number"
            value={values.StreetNo}
            onChange={handleChange}
          />
          {errors.StreetNo && <p>{errors.StreetNo}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">City</label>
          <input
            id="city"
            type="text"
            name="city"
            className="form-input"
            placeholder="Enter your city"
            value={values.city}
            onChange={handleChange}
          />
          {errors.city && <p>{errors.city}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">State</label>
          <input
            id="state"
            type="text"
            name="state"
            className="form-input"
            placeholder="Enter your state"
            value={values.state}
            onChange={handleChange}
          />
          {errors.state && <p>{errors.state}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Phone Number</label>
          <input
            id="Phone-Number"
            type="text"
            name="PhoneNumber"
            className="form-input"
            placeholder="Enter your Phone Number"
            value={values.PhoneNumber}
            onChange={handleChange}
          />
          {errors.PhoneNumber && <p>{errors.PhoneNumber}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label"> Social Security Number </label>
          <input
            id="Social Security Number"
            type="text"
            name="SocialSecurityNumber"
            className="form-input"
            placeholder="Enter your Social Security Number"
            value={values.SocialSecurityNumber}
            onChange={handleChange}
          />
          {errors.SocialSecurityNumber && <p>{errors.SocialSecurityNumber}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">License Plate </label>
          <input
            id="Licence-plate"
            type="text"
            name="Licenceplate"
            className="form-input"
            placeholder="Enter your Licence-plate"
            value={values.Licenceplate}
            onChange={handleChange}
          />
          {errors.Licenceplate && <p>{errors.Licenceplate}</p>}
        </div>

        <button className="form-input-btn" type="submit">
          submit
        </button>
        <span className="form-input-login"></span>
      </form>
    </div>
  );
};

export default FormSignup;
