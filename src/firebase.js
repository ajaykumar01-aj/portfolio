// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD5YjFjSHvhrjv4r0klXx8fxsiK9c6BpCM",
  authDomain: "portfolio-2a7b3.firebaseapp.com",
  projectId: "portfolio-2a7b3",
  storageBucket: "portfolio-2a7b3.firebasestorage.app",
  messagingSenderId: "317818535577",
  appId: "1:317818535577:web:5088936535da8560270208",
  measurementId: "G-1Y0B5X0LE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
