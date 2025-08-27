// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB20qUw48oMgmLD2Cf6-FzUd1qnsWEZ3XE",
  authDomain: "movie-rs-d4c5d.firebaseapp.com",
  projectId: "movie-rs-d4c5d",
  storageBucket: "movie-rs-d4c5d.firebasestorage.app",
  messagingSenderId: "559654420705",
  appId: "1:559654420705:web:e39102f40fe495a66677a0",
  measurementId: "G-4M48D06RZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();