const form = document.querySelector("#login");


import { auth, signInWithEmailAndPassword } from "../js/firebase.js";
const btn = document.querySelector("#btnSubmit");


console.log(form);
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        btn.disabled = true;
        btn.style.backgroundColor = "rgb(130, 134, 130)";
        btn.innerHTML = `<div class="loader"></div>`

        let email = e.target.children[0].children[1].children[1].value;
        let password = e.target.children[1].children[1].children[1].value;

        const user = await signInWithEmailAndPassword(auth, email, password);
        
        form.reset();
        btn.innerHTML = "Log-in"
        window.location = "./Dashboard.html"
    } catch (error) {
        swal("Oops", "Something went wrong!", "error")
        btn.disabled = false;
        btn.style.backgroundColor = "rgb(7, 124, 7)";
        btn.innerHTML = "Log-in"


        console.log("nnoonnono");

    }
});

