// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBuFnTrcwDcO469--gGDgWeOLlXFSuIiSg",
    authDomain: "zad8-backend.firebaseapp.com",
    projectId: "zad8-backend",
    storageBucket: "zad8-backend.firebasestorage.app",
    messagingSenderId: "467404249520",
    appId: "1:467404249520:web:3c13624ae68393ec6e1e75",
    measurementId: "G-H32QBQ3JTT"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
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
