export default function validateInfo(values) {
  let errors = {};

  if (!values.LastName.trim()) {
    errors.LastName = "Last name required";
  } else if (!/^[a-zA-Z]+$/i.test(values.LastName)) {
    errors.LastName = "Please insert only letters";
  } else if (values.LastName.length > 20) {
    errors.LastName = "Too many letters";
  } else if (values.LastName.length < 2) {
    errors.LastName = "Too few letters";
  }

  //FirstName
  if (!values.FirstName.trim()) {
    errors.FirstName = "FirstName required";
  } else if (
    !/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/i.test(values.FirstName)
  ) {
    errors.FirstName = "Please insert a valid name";
  } else if (values.FirstName.length > 25) {
    errors.FirstName = "Too many letters";
  } else if (values.FirstName.length < 3) {
    errors.FirstName = "Too few letters";
  }

  if (!values.city.trim()) {
    errors.city = "City required";
  } else if (!/^[a-zA-Z]+$/i.test(values.city)) {
    errors.city = "Please insert only letters";
  } else if (values.city.length > 10) {
    errors.city = "Too many letters";
  } else if (values.city.length < 2) {
    errors.city = "Too few letters";
  }

  if (!values.state.trim()) {
    errors.state = "State required";
  } else if (!/^[a-zA-Z]+$/i.test(values.state)) {
    errors.state = "This is not a valid State name";
  } else if (values.state.length > 10) {
    errors.state = "Too many letters";
  } else if (values.state.length < 2) {
    errors.state = "Too few letters";
  }

  if (!values.PhoneNumber.trim()) {
    errors.PhoneNumber = "PhoneNumber required";
  } else if (!/^[0-9]+$/i.test(values.PhoneNumber)) {
    errors.PhoneNumber = "Please insert only numbers";
  } else if (values.PhoneNumber.length > 13) {
    errors.PhoneNumber = "Too many numbers";
  } else if (values.PhoneNumber.length < 10) {
    errors.PhoneNumber = "Too few numbers";
  }

  if (!values.SocialSecurityNumber.trim()) {
    errors.SocialSecurityNumber = "SocialSecurityNumber required";
  } else if (!/^[0-9]+$/i.test(values.SocialSecurityNumber)) {
    errors.SocialSecurityNumber = "Please insert only numbers";
  } else if (values.SocialSecurityNumber.length > 16) {
    errors.SocialSecurityNumber = "Too many numberns";
  } else if (values.SocialSecurityNumber.length < 12) {
    errors.SocialSecurityNumber = "Too few numbers";
  }

  if (
    values.StreetName.length !== 0 &&
    !/^[A-Za-z.-]+$/i.test(values.StreetName)
  ) {
    errors.StreetName = "Invalid Street Name";
  } else if (values.StreetName.length !== 0 && values.StreetName.length > 16) {
    errors.StreetName = "Too many letters";
  } else if (values.StreetName.length !== 0 && values.StreetName.length < 2) {
    errors.StreetName = "Too few letters";
  }

  if (
    values.StreetNo.length !== 0 &&
    !/^[A-Za-z0-9]+$/i.test(values.StreetNo)
  ) {
    errors.StreetNo = "Invalid Street No";
  }

  if (
    values.Licenceplate.length !== 0 &&
    !/^[A-Za-z0-9]+$/i.test(values.Licenceplate)
  ) {
    errors.Licenceplate = "Invalid License-plate";
  } else if (
    values.Licenceplate.length !== 0 &&
    values.Licenceplate.length > 12
  ) {
    errors.Licenceplate = "Too many letters";
  } else if (
    values.Licenceplate.length !== 0 &&
    values.Licenceplate.length < 4
  ) {
    errors.Licenceplate = "Too few letters";
  }
  return errors;
}
