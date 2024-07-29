import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyANPLL9t0Pijw9HJB48MFq54d25MjiaKWM",
    authDomain: "signup-f62e1.firebaseapp.com",
    databaseURL: "https://signup-f62e1-default-rtdb.firebaseio.com",
    projectId: "signup-f62e1",
    storageBucket: "signup-f62e1.appspot.com",
    messagingSenderId: "890235591536",
    appId: "1:890235591536:web:eb9d2aeeb5c379b98b4db5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)





export {
   auth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   onAuthStateChanged,
};