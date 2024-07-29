import { auth, onAuthStateChanged, signOut } from "../js/firebase.js";
console.log('dsds');

let btn = document.querySelector(".btnDropdown");
let ProfileNameDiv = document.querySelector(".nameLogo")
let divEmail = document.querySelector(".text");


onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("hello");
        console.log(user);
        let emailUser = user.email;
        let emailcom = emailUser.substr(emailUser.length - 10);
        let ProfileName = emailUser.slice(0,1).toUpperCase();
        ProfileNameDiv.innerHTML = `<b>${ProfileName}</b>`
        emailUser = `${emailUser.slice(0,3)}****${emailcom}`

        divEmail.innerText = emailUser;
        let result = user.metadata.lastLoginAt;
        let minutes = Math.floor((1722170001218 / (1000 * 60 * 60)) / (1000 * 60));
        console.log(minutes);
    } else {
        window.location = "../pages/login.html";
    }
});

btn.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
        await signOut(auth);

    } catch (error) {

    }
})