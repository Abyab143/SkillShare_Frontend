// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFfLYmktup2R5ko9HkDmg9nPUy9hbYvfs",
  authDomain: "skillshare-8ec0e.firebaseapp.com",
  projectId: "skillshare-8ec0e",
  storageBucket: "skillshare-8ec0e.appspot.com",
  messagingSenderId: "538769866352",
  appId: "1:538769866352:web:b79ee53ce68d278c277eb5",
  measurementId: "G-47S5D5J5TW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;