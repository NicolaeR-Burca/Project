export default function validateInfo(values) {
  let errors = {};

  if (!values.LastName.trim()) {
    errors.LastName = "Last name required";
  } else if (!/^[a-zA-Z]+$/i.test(values.LastName)) {
    errors.LastName = "Please insert only letters";
  }

  //FirstName
  if (!values.FirstName.trim()) {
    errors.FirstName = "FirstName required";
  } else if (!/^[a-zA-Z]+$/i.test(values.FirstName)) {
    errors.FirstName = "Please insert only letters";
  }

  if (!values.city.trim()) {
    errors.city = "City required";
  } else if (!/^[a-zA-Z]+$/i.test(values.city)) {
    errors.city = "Please insert only letters";
  }

  if (!values.state.trim()) {
    errors.state = "State required";
  } else if (!/^[a-zA-Z]+$/i.test(values.state)) {
    errors.state = "This is not a valid State name";
  }

  if (!values.PhoneNumber.trim()) {
    errors.PhoneNumber = "PhoneNumber required";
  } else if (!/^[0-9]+$/i.test(values.PhoneNumber)) {
    errors.PhoneNumber = "Please insert only numbers";
  }
  if (!values.SocialSecurityNumber.trim()) {
    errors.SocialSecurityNumber = "SocialSecurityNumber required";
  } else if (!/^[0-9]+$/i.test(values.SocialSecurityNumber)) {
    errors.SocialSecurityNumber = "Please insert only numbers";
  }

  return errors;
}
