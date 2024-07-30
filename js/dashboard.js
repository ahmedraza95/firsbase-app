const toastTrigger = document.querySelector('#btnSubmit');
const toastLiveExample = document.getElementById('liveToast');


if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('auto', () => {
        toastBootstrap.show()
    })
}
import { auth, onAuthStateChanged, signOut } from "../js/firebase.js";

let btn = document.querySelector(".btnDropdown");
let ProfileNameDiv = document.querySelector(".nameLogo")
let divEmail = document.querySelector(".text");
// onAuthStateChanged(auth, (user) => {
//     console.log(user);
// });

onAuthStateChanged(auth, (user) => {
    try {

        if (user.email === "ahmedhome6789@gmail.com") {
            window.location = "../adminData/adminpanel.html";
            // console.log(user.email);
        } else if (user) {
            console.log(user);
            let emailUser = user.email;
            let emailcom = emailUser.substr(emailUser.length - 10);
            let ProfileName = emailUser.slice(0, 1).toUpperCase();
            ProfileNameDiv.innerHTML = `<b>${ProfileName}</b>`
            emailUser = `${emailUser.slice(0, 3)}****${emailcom}`
            divEmail.innerText = emailUser;
        }
    }
    catch (error) {
        console.log(error);
            window.location = "../pages/login.html";
            console.log("hello");
    }
});

btn.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
        await signOut(auth);

    } catch (error) {

    }
})