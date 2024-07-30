import { auth, onAuthStateChanged, signOut } from "../js/firebase.js";


let btn = document.querySelector(".btnDropdown");
let ProfileNameDiv = document.querySelector(".nameLogo")
let divEmail = document.querySelector(".text");

onAuthStateChanged(auth, (user) => {

    try {
        if (user.email === "ahmedhome6789@gmail.com") {
            console.log("hello");
            console.log(user);
            let emailUser = user.email;
            let emailcom = emailUser.substr(emailUser.length - 10);
            let ProfileName = emailUser.slice(0, 1).toUpperCase();
            ProfileNameDiv.innerHTML = `<b>${ProfileName}</b>`
            emailUser = `${emailUser.slice(0, 3)}****${emailcom}`

            divEmail.innerText = emailUser;
            let result = user.metadata.lastLoginAt;
            let minutes = Math.floor((1722170001218 / (1000 * 60 * 60)) / (1000 * 60));
            console.log(minutes);
        } else if (user) {
            window.location = "../pages/dashboard.html";
        } else {
            window.location = "../pages/login.html";
        }
    } catch (error) {
        window.location ="../pages/login.html"
    }
});

btn.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
        await signOut(auth);

    } catch (error) {

    }
})
