// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy0dzkHGFPxdp1J6L-Gl7xqJrlXXrDb3E",
  authDomain: "sweet-arts.firebaseapp.com",
  projectId: "sweet-arts",
  storageBucket: "sweet-arts.firebasestorage.app",
  messagingSenderId: "1089797351402",
  appId: "1:1089797351402:web:85e20bde800c7e62167493"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
export const auth = getAuth(app);