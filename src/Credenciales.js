// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXHY9lKeI2EiWKbC7BNdlmKCrXQT-OUvE",
  authDomain: "rifa-e244e.firebaseapp.com",
  projectId: "rifa-e244e",
  storageBucket: "rifa-e244e.appspot.com",
  messagingSenderId: "561410690591",
  appId: "1:561410690591:web:dcaa893f783629f9bacf2a"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;