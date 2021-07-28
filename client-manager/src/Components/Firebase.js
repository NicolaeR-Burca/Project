import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCxYMMWoQWW8tI3WyZlCn0Xz4hAv85kfZg",
  authDomain: "myclientmanager-d5db6.firebaseapp.com",
  projectId: "myclientmanager-d5db6",
  storageBucket: "myclientmanager-d5db6.appspot.com",
  messagingSenderId: "145408030758",
  appId: "1:145408030758:web:bbc4d8089cd58ad702cee7"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;