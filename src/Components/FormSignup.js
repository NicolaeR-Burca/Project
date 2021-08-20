import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";
import LinearWithValueLabel from "./Progress";
import { rtvalidation as v } from "./rtValidateInfo";

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

  const [lastName, setLastName] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [streetName, setStreetName] = React.useState("");
  const [streetNumber, setStreetNumber] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [ssn, setSSN] = React.useState("");
  const [licensePlate, setLicensePlate] = React.useState("");
  const [rtErrors, setRTErrors] = React.useState({});

  // LastName: "",
  //   FirstName: "",
  //   StreetName: "",
  //   StreetNo: "",
  //   city: "",
  //   state: "",
  //   PhoneNumber: "",
  //   SocialSecurityNumber: "",
  //   Licenceplate: "",

  React.useEffect(() => {
    if (values.LastName) {
      setLastName(values.LastName);
    } else setLastName("");

    if (values.FirstName) {
      setFirstName(values.FirstName);
    } else setFirstName("");

    if (values.StreetName) {
      setStreetName(values.StreetName);
    } else setStreetName("");

    if (values.StreetNo) {
      setStreetNumber(values.StreetNo);
    } else setStreetNumber("");

    if (values.city) {
      setCity(values.city);
    } else setCity("");

    if (values.state) {
      setState(values.state);
    } else setState("");

    if (values.PhoneNumber) {
      setPhone(values.PhoneNumber);
    } else setPhone("");
    if (values.SocialSecurityNumber) {
      setSSN(values.SocialSecurityNumber);
    } else setSSN("");
    if (values.Licenceplate) {
      setLicensePlate(values.Licenceplate);
    } else setLicensePlate("");
  }, [values]);

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>Add New Client </h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <LinearWithValueLabel progress={progress < 99 ? progress : 100} />
        </div>
        <fieldset>
          <div className="form-inputs">
            <label className="form-label">First Name</label>
            <input
              id="First-Name"
              type="text"
              name="FirstName"
              className="form-input"
              value={values.FirstName}
              placeholder="Enter your first name..."
              onChange={handleChange}
              onBlur={(e) => {
                if (e.target.value && !visited[0]) {
                  setProgress(progress + 11.11);
                  visited[0] = true;
                } else if (visited[0] && e.target.value === "") {
                  setProgress(progress - 11.11);
                  visited[0] = false;
                }
                setRTErrors({
                  ...rtErrors,
                  firstName: v.CheckFirstName(firstName),
                });
              }}
            />
            {rtErrors && rtErrors.firstName && <p>{rtErrors.firstName}</p>}
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
              placeholder="Enter your last name..."
              onChange={handleChange}
              onBlur={(e) => {
                if (e.target.value && !visited[1]) {
                  setProgress(progress + 11.11);
                  visited[1] = true;
                } else if (visited[1] && e.target.value === "") {
                  setProgress(progress - 11.11);
                  visited[1] = false;
                }
                setRTErrors({
                  ...rtErrors,
                  lastName: v.CheckLastName(lastName),
                });
              }}
            />

            {rtErrors && rtErrors.lastName && <p>{rtErrors.lastName}</p>}
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
              placeholder="Enter your street name..."
              onChange={handleChange}
              onBlur={(e) => {
                if (e.target.value && !visited[2]) {
                  setProgress(progress + 11.11);
                  visited[2] = true;
                } else if (visited[2] && e.target.value === "") {
                  setProgress(progress - 11.11);
                  visited[2] = false;
                }
                setRTErrors({
                  ...rtErrors,
                  streetName: v.CheckStreetName(streetName),
                });
              }}
            />
            {rtErrors && rtErrors.streetName && <p>{rtErrors.streetName}</p>}
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
              placeholder="Enter your street number..."
              onChange={handleChange}
              onBlur={(e) => {
                if (e.target.value && !visited[3]) {
                  setProgress(progress + 11.11);
                  visited[3] = true;
                } else if (visited[3] && e.target.value === "") {
                  setProgress(progress - 11.11);
                  visited[3] = false;
                }
                setRTErrors({
                  ...rtErrors,
                  streetNumber: v.CheckStreetNumber(streetNumber),
                });
              }}
            />
            {rtErrors && rtErrors.streetNumber && (
              <p>{rtErrors.streetNumber}</p>
            )}
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
              placeholder="Enter your city..."
              onChange={handleChange}
              onBlur={(e) => {
                if (e.target.value && !visited[4]) {
                  setProgress(progress + 11.11);
                  visited[4] = true;
                } else if (visited[4] && e.target.value === "") {
                  setProgress(progress - 11.11);
                  visited[4] = false;
                }
                setRTErrors({
                  ...rtErrors,
                  city: v.CheckCity(city),
                });
              }}
            />
            {rtErrors && rtErrors.city && <p>{rtErrors.city}</p>}
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
              placeholder="Enter your state..."
              onChange={handleChange}
              onBlur={(e) => {
                if (e.target.value && !visited[5]) {
                  setProgress(progress + 11.11);
                  visited[5] = true;
                } else if (visited[5] && e.target.value === "") {
                  setProgress(progress - 11.11);
                  visited[5] = false;
                }
                setRTErrors({
                  ...rtErrors,
                  state: v.CheckState(state),
                });
              }}
            />
            {rtErrors && rtErrors.state && <p>{rtErrors.state}</p>}
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
              placeholder="Enter your phone number..."
              onChange={handleChange}
              onBlur={(e) => {
                if (e.target.value && !visited[6]) {
                  setProgress(progress + 11.11);
                  visited[6] = true;
                } else if (visited[6] && e.target.value === "") {
                  setProgress(progress - 11.11);
                  visited[6] = false;
                }
                setRTErrors({
                  ...rtErrors,
                  phone: v.CheckPhone(phone),
                });
              }}
            />
            {rtErrors && rtErrors.phone && <p>{rtErrors.phone}</p>}
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
              placeholder="Enter your ssn..."
              onChange={handleChange}
              onBlur={(e) => {
                if (e.target.value && !visited[7]) {
                  setProgress(progress + 11.11);
                  visited[7] = true;
                } else if (visited[7] && e.target.value === "") {
                  setProgress(progress - 11.11);
                  visited[7] = false;
                }
                setRTErrors({
                  ...rtErrors,
                  ssn: v.CheckSSN(ssn),
                });
              }}
            />
            {rtErrors && rtErrors.ssn && <p>{rtErrors.ssn}</p>}
            {errors.SocialSecurityNumber && (
              <p>{errors.SocialSecurityNumber}</p>
            )}
          </div>

          <div className="form-inputs">
            <label className="form-label">License Plate </label>
            <input
              id="Licence-plate"
              type="text"
              name="Licenceplate"
              className="form-input"
              value={values.Licenceplate}
              placeholder="Enter your licence plate..."
              onChange={handleChange}
              onBlur={(e) => {
                if (e.target.value && !visited[8]) {
                  setProgress(progress + 11.11);
                  visited[8] = true;
                } else if (visited[8] && e.target.value === "") {
                  setProgress(progress - 11.11);
                  visited[8] = false;
                }
                setRTErrors({
                  ...rtErrors,
                  licensePlate: v.CheckLicensePlate(licensePlate),
                });
              }}
            />
            {rtErrors && rtErrors.licensePlate && (
              <p>{rtErrors.licensePlate}</p>
            )}
            {errors.Licenceplate && <p>{errors.Licenceplate}</p>}
          </div>

          <button className="form-input-btn" type="submit">
            Add Client
          </button>
        </fieldset>
        <span className="form-input-login"></span>
      </form>
    </div>
  );
};

export default FormSignup;
