export const rtvalidation = {
  CheckLastName: function (lastName) {
    if (!lastName) {
      return "Last name required";
    } else if (!/^[a-zA-Z -]+$/i.test(lastName)) {
      return "Please insert only letters";
    } else if (lastName.length > 20) {
      return "Too many letters";
    } else if (lastName.length < 2) {
      return "Too few letters";
    } else return "";
  },

  CheckFirstName: function (firstName) {
    if (!firstName) {
      return "FirstName required";
    } else if (!/^[a-z ,.'-]+$/i.test(firstName)) {
      return "Please insert a valid name";
    } else if (firstName.length > 25) {
      return "Too many letters";
    } else if (firstName.length < 3) {
      return "Too few letters";
    } else return "";
  },

  CheckCity: function (city) {
    if (!city) {
      return "City required";
    } else if (!/^[a-zA-Z -]+$/i.test(city)) {
      return "Please insert only letters";
    } else if (city.length > 25) {
      return "Too many letters";
    } else if (city.length < 2) {
      return "Too few letters";
    } else return "";
  },

  CheckState: function (state) {
    if (!state) {
      return "State required";
    } else if (!/^[a-zA-Z -]+$/i.test(state)) {
      return "This is not a valid State name";
    } else if (state.length > 25) {
      return "Too many letters";
    } else if (state.length < 2) {
      return "Too few letters";
    } else return "";
  },

  CheckPhone: function (phone) {
    if (!phone) {
      return "PhoneNumber required";
    } else if (!/^[0-9]+$/i.test(phone)) {
      return "Please insert only numbers";
    } else if (phone.length > 14) {
      return "Too many numbers";
    } else if (phone.length < 10) {
      return "Too few numbers";
    } else return "";
  },

  CheckSSN: function (ssn) {
    if (!ssn) {
      return "SocialSecurityNumber required";
    } else if (!/^[0-9]+$/i.test(ssn)) {
      return "Please insert only numbers";
    } else if (ssn.length > 14) {
      return "Too many numbers";
    } else if (ssn.length < 12) {
      return "Too few numbers";
    } else return "";
  },

  CheckStreetName: function (streetName) {
    if (!streetName) {
      return "Street Name required";
    } else if (streetName.length !== 0 && !/^[A-Za-z .-]+$/i.test(streetName)) {
      return "Invalid Street Name";
    } else if (streetName !== 0 && streetName.length > 25) {
      return "Too many letters";
    } else if (streetName.length !== 0 && streetName.length < 2) {
      return "Too few letters";
    } else return "";
  },

  CheckStreetNumber: function (streetNumber) {
    if (!streetNumber) {
      return "Street Number required";
    } else if (
      streetNumber.length !== 0 &&
      !/^[A-Za-z0-9 .-]+$/i.test(streetNumber)
    ) {
      return "Invalid Street No";
    } else if (streetNumber.length !== 0 && streetNumber.length > 7) {
      return "Invalid street number";
    } else return "";
  },

  CheckLicensePlate: function (licensePlate) {
    if (!licensePlate) {
      return "License Plate required";
    } else if (
      licensePlate.length !== 0 &&
      !/^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/i.test(licensePlate)
    ) {
      return "Invalid License-plate";
    } else if (licensePlate.length !== 0 && licensePlate.length > 12) {
      return "Too many letters";
    } else if (licensePlate.length !== 0 && licensePlate.length < 4) {
      return "Too few letters";
    } else return "";
  },
};
