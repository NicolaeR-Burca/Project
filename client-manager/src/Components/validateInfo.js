export default function validateInfo(values) {
  let errors = {};

  if (!values.LastName.trim()) {
    errors.LastName = "AAAAAAAAAAAAAAAAAAAAAAAAAAAa";
  } else if (values.LastName.length < 10) {
    errors.LastName = "Too short";
  }
  //FirstName
  if (!values.FirstName.trim()) {
    errors.FirstName = "FirstName required";
  }
  if (!values.city.trim()) {
    errors.city = "City required";
  }
  if (!values.state.trim()) {
    errors.state = "State required";
  }
  if (!values.PhoneNumber.trim()) {
    errors.PhoneNumber = "PhoneNumber required";
  }
  if (!values.SocialSecurityNumber.trim()) {
    errors.SocialSecurityNumber = "SocialSecurityNumber required";
  }
  return errors;
}
