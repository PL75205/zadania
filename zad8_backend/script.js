// Import the functions you need from the SDKs you need
// Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// Firestore
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Import Firestore functions
import { getFirestore, collection, addDoc } from "firebase/firestore"; //

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuFnTrcwDcO469--gGDgWeOLlXFSuIiSg",
  authDomain: "zad8-backend.firebaseapp.com",
  projectId: "zad8-backend",
  storageBucket: "zad8-backend.firebasestorage.app",
  messagingSenderId: "467404249520",
  appId: "1:467404249520:web:684c8e029d18ae366e1e75",
  measurementId: "G-7TMSWTC80H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore database


// formularz
const form = document.getElementById("form");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  try {
    // zapis do firestore
    await addDoc(collection(db, "backend"), { //
      name: name,
      email: email,
      createdAt: new Date()
    });

    msg.textContent = "Dane zapisane poprawnie!";
    form.reset();

  } catch (error) {
    console.error(error);
    msg.textContent = "Błąd!";
  }
});
