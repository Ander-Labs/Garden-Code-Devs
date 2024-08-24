// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyC4UxHk1I2FOC404hDnRSQ1HAoPPXjHHFA",
  authDomain: "garden-code.firebaseapp.com",
  projectId: "garden-code",
  storageBucket: "garden-code.appspot.com",
  messagingSenderId: "383595610414",
  appId: "1:383595610414:web:c19322e09e8ead1a99fabf",
  measurementId: "G-EJM0L5LGYG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
