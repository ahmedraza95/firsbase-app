import { auth, onAuthStateChanged } from "./firebase.js";

console.log("gdg");

onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location = "../pages/Dashboard.html";
    } else {
        window.location = "../pages/login.html";
        console.log("done");

    }
});