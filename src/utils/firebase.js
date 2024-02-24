// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSX0-uK59yTThe5bDp5J0SjNRKInsgUos",
  authDomain: "flickgpt.firebaseapp.com",
  projectId: "flickgpt",
  storageBucket: "flickgpt.appspot.com",
  messagingSenderId: "217461042691",
  appId: "1:217461042691:web:e218f63868c13f43d02836",
  measurementId: "G-NW2XDC3K3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
