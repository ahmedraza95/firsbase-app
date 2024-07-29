const form = document.querySelector("#signup");
console.log(form);

import { auth, createUserWithEmailAndPassword } from "../js/firebase.js";

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        let email = e.target.children[1].children[1].children[1].value;
        let password = e.target.children[2].children[1].children[1].value;

        let Newuser = await createUserWithEmailAndPassword(auth , email , password);

        swal("Good job!", "You clicked the button!", "success");
        window.location = "../pages/Dashboard.html"

    } catch (error) {
        console.log("nnoonnono");

    }
})