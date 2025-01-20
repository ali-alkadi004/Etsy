// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbNes2pzzfT2QTdKaRWxA0G_7d9QgXNtY",
  authDomain: "etsy-e518f.firebaseapp.com",
  projectId: "etsy-e518f",
  storageBucket: "etsy-e518f.appspot.com",
  messagingSenderId: "678772074380",
  appId: "1:678772074380:web:a69acaa9cae2e6c6a518a9",
  measurementId: "G-21978SDGZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
const auth = getAuth(app);

// Initialize Analytics only in the browser
let analytics: any;
if (typeof window !== "undefined") {
  const { getAnalytics } = await import("firebase/analytics");
  analytics = getAnalytics(app);
}

export { app, auth, analytics };
