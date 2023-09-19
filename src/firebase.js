/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCiHG2aNeob0XrT08JrUO4DhNFGSlqcbU",
  authDomain: "portfolio-d1afb.firebaseapp.com",
  projectId: "portfolio-d1afb",
  storageBucket: "portfolio-d1afb.appspot.com",
  messagingSenderId: "510318544241",
  appId: "1:510318544241:web:ea4f41f08aad2ff165a2d0",
  measurementId: "G-F9DM5SKS0L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
