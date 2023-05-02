// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByP_uo1NOi6heiRb27cEQftiE1f2NFPaM",
  authDomain: "korean-cookery.firebaseapp.com",
  projectId: "korean-cookery",
  storageBucket: "korean-cookery.appspot.com",
  messagingSenderId: "228017440653",
  appId: "1:228017440653:web:7343994faa86f2ebff1fc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;