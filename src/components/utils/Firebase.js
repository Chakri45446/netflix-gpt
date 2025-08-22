// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

import { getAuth  } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCjwjEN57PCa--a2Q53XI1JWFKddEbWisY",
  authDomain: "netflixgpt-69de4.firebaseapp.com",
  projectId: "netflixgpt-69de4",
  storageBucket: "netflixgpt-69de4.firebasestorage.app",
  messagingSenderId: "26479845697",
  appId: "1:26479845697:web:15ea04a752f349712101c0",
  measurementId: "G-WFYYEHL2TR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// sign in / sign up


export  const auth = getAuth();


// Initialize Analytics safely
let analytics;
isSupported().then((yes) => {
  if (yes) {
    analytics = getAnalytics(app);
    console.log("Analytics enabled ✅");
  } else {
    console.log("Analytics not supported in this environment ⚠️");
  }
});

export { app, analytics };


