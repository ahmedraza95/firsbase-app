const form = document.querySelector("#login");

import { auth, signInWithEmailAndPassword } from "../js/firebase.js";
console.log(form);
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        let email = e.target.children[0].children[1].children[1].value;
        let password = e.target.children[1].children[1].children[1].value;

        const user = await signInWithEmailAndPassword(auth, email, password);

        window.location = "./Dashboard.html"
    } catch (error) {
        console.log("nnoonnono");

    }
})