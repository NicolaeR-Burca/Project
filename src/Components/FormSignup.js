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
              setRTErrors({
                ...rtErrors,
                firstName: v.CheckFirstName(firstName),
              });
            }}
          />
          {rtErrors && rtErrors.firstName && <p>{rtErrors.firstName}</p>}
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
              setRTErrors({
                ...rtErrors,
                lastName: v.CheckLastName(lastName),
              });
            }}
          />
          {rtErrors && rtErrors.lastName && <p>{rtErrors.lastName}</p>}
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
              setRTErrors({
                ...rtErrors,
                streetName: v.CheckStreetName(streetName),
              });
            }}
          />
          {rtErrors && rtErrors.streetName && <p>{rtErrors.streetName}</p>}
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
              setRTErrors({
                ...rtErrors,
                streetNumber: v.CheckStreetNumber(streetNumber),
              });
            }}
          />
          {rtErrors && rtErrors.streetNumber && <p>{rtErrors.streetNumber}</p>}
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
              setRTErrors({
                ...rtErrors,
                city: v.CheckCity(city),
              });
            }}
          />
          {rtErrors && rtErrors.city && <p>{rtErrors.city}</p>}
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
              setRTErrors({
                ...rtErrors,
                state: v.CheckState(state),
              });
            }}
          />
          {rtErrors && rtErrors.state && <p>{rtErrors.state}</p>}
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
              setRTErrors({
                ...rtErrors,
                phone: v.CheckPhone(phone),
              });
            }}
          />
          {rtErrors && rtErrors.phone && <p>{rtErrors.phone}</p>}
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
              setRTErrors({
                ...rtErrors,
                ssn: v.CheckSSN(ssn),
              });
            }}
          />
          {rtErrors && rtErrors.ssn && <p>{rtErrors.ssn}</p>}
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
              setRTErrors({
                ...rtErrors,
                licensePlate: v.CheckLicensePlate(licensePlate),
              });
            }}
          />
          {rtErrors && rtErrors.licensePlate && <p>{rtErrors.licensePlate}</p>}
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
