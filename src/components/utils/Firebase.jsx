// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAW28H5vK5gbnHNVpJzqdO9rSScqPu-EwE",
  authDomain: "myfirstprojectnet.firebaseapp.com",
  projectId: "myfirstprojectnet",
  storageBucket: "myfirstprojectnet.firebasestorage.app",
  messagingSenderId: "118364707697",
  appId: "1:118364707697:web:e070b5ece24cc8397af4d0",
  measurementId: "G-VKJCS04PC1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// sign in / sign up

export const auth = getAuth();

// Initialize Analytics safely
let analytics;
isSupported().then((yes) => {
  if (yes) {
    analytics = getAnalytics(app);
    // console.log("Analytics enabled ✅");
  } else {
    //console.log("Analytics not supported in this environment ⚠️");
  }
});

export { app, analytics };
