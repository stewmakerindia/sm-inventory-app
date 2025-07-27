// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8tdzqw4J34Na7gU9mEwZW5g59J-GgA",
  authDomain: "sm-inventory-management.firebaseapp.com",
  projectId: "sm-inventory-management",
  storageBucket: "sm-inventory-management.appspot.com",
  messagingSenderId: "728078950194",
  appId: "1:728078950194:web:783cb98bb6c9242a96e52b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };