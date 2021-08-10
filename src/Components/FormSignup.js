import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";
import LinearWithValueLabel from "./Progress";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  const [progress, setProgress] = React.useState(0);
  const [visited, setVisited] = React.useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>Fill the following form to add a new client </h1>
        <LinearWithValueLabel progress={progress < 99 ? progress : 100} />
        <div className="form-inputs">
          <label className="form-label">First Name</label>
          <input
            id="First-Name"
            type="text"
            name="FirstName"
            className="form-input"
            value={values.FirstName}
            onChange={handleChange}
            onBlur={(e) => {
              if (e.target.value && !visited[0]) {
                setProgress(progress + 11.11);
                visited[0] = true;
              } else if (visited[0] && e.target.value === "") {
                setProgress(progress - 11.11);
                visited[0] = false;
              }
            }}
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
            value={values.LastName}
            onChange={handleChange}
            onBlur={(e) => {
              if (e.target.value && !visited[1]) {
                setProgress(progress + 11.11);
                visited[1] = true;
              } else if (visited[1] && e.target.value === "") {
                setProgress(progress - 11.11);
                visited[1] = false;
              }
            }}
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
            value={values.StreetName}
            onChange={handleChange}
            onBlur={(e) => {
              if (e.target.value && !visited[2]) {
                setProgress(progress + 11.11);
                visited[2] = true;
              } else if (visited[2] && e.target.value === "") {
                setProgress(progress - 11.11);
                visited[2] = false;
              }
            }}
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
            value={values.StreetNo}
            onChange={handleChange}
            onBlur={(e) => {
              if (e.target.value && !visited[3]) {
                setProgress(progress + 11.11);
                visited[3] = true;
              } else if (visited[3] && e.target.value === "") {
                setProgress(progress - 11.11);
                visited[3] = false;
              }
            }}
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
            value={values.city}
            onChange={handleChange}
            onBlur={(e) => {
              if (e.target.value && !visited[4]) {
                setProgress(progress + 11.11);
                visited[4] = true;
              } else if (visited[4] && e.target.value === "") {
                setProgress(progress - 11.11);
                visited[4] = false;
              }
            }}
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
            value={values.state}
            onChange={handleChange}
            onBlur={(e) => {
              if (e.target.value && !visited[5]) {
                setProgress(progress + 11.11);
                visited[5] = true;
              } else if (visited[5] && e.target.value === "") {
                setProgress(progress - 11.11);
                visited[5] = false;
              }
            }}
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
            value={values.PhoneNumber}
            onChange={handleChange}
            onBlur={(e) => {
              if (e.target.value && !visited[6]) {
                setProgress(progress + 11.11);
                visited[6] = true;
              } else if (visited[6] && e.target.value === "") {
                setProgress(progress - 11.11);
                visited[6] = false;
              }
            }}
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
            value={values.SocialSecurityNumber}
            onChange={handleChange}
            onBlur={(e) => {
              if (e.target.value && !visited[7]) {
                setProgress(progress + 11.11);
                visited[7] = true;
              } else if (visited[7] && e.target.value === "") {
                setProgress(progress - 11.11);
                visited[7] = false;
              }
            }}
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
            value={values.Licenceplate}
            onChange={handleChange}
            onBlur={(e) => {
              if (e.target.value && !visited[8]) {
                setProgress(progress + 11.11);
                visited[8] = true;
              } else if (visited[8] && e.target.value === "") {
                setProgress(progress - 11.11);
                visited[8] = false;
              }
            }}
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
