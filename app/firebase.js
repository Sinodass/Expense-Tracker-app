// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
require('dotenv').config();


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "expense-tracker-d348e.firebaseapp.com",
  projectId: "expense-tracker-d348e",
  storageBucket: "expense-tracker-d348e.appspot.com",
  messagingSenderId: "887301980740",
  appId: "1:887301980740:web:e55795e0223b8b316d3211"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);