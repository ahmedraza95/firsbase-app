const toastTrigger = document.querySelector('#btnSubmit');
const toastLiveExample = document.getElementById('liveToast');
const div = document.querySelector("#divall")
const myCollectionReference = collection(db, "products");
if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('auto', () => {
        toastBootstrap.show()
    })
}
import { auth, onAuthStateChanged, signOut } from "../js/firebase.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "../js/firebase.js";
import {
    db,
    collection,
    addDoc,
    getDocs,
    serverTimestamp,
    onSnapshot,
} from "../js/firebase.js";

let btn = document.querySelector(".btnDropdown");
let productform = document.querySelector("#formProduct");
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
const img = document.querySelector("#img1");

productform.addEventListener("submit", async (e) => {
    e.preventDefault();
    let productName = e.target.children[0].value;
    let productprice = e.target.children[1].value;
    let productdetails = e.target.children[2].value;
    let productimg = img.files[0];

    const storage = getStorage();
    const storageRef = await ref(storage, productimg.name);
    const metadata = {
        contentType: 'image/jpeg'
    }
    const uploadTask = await uploadBytes(storageRef, productimg, metadata);
    console.log(uploadTask);
    const fileUrl = await getDownloadURL(storageRef);
    console.log(fileUrl);
    let productobj = {
        name: productName,
        price: productprice,
        details: productdetails,
        img: fileUrl,
        createdAt: serverTimestamp(),
    }

    try {
        await addDoc(myCollectionReference, productobj);

    } catch (e) {
        console.log("e");

    }

});
onSnapshot(myCollectionReference, (doc) => {
    div.innerHTML = "";

    doc.docs.forEach((eachDoc, index) => {

        const product = eachDoc.data();
        console.log(product);


        div.innerHTML += `<div class="borders">
    ${index + 1}
    <h3>${product.name}</h3>
    <span>${product.createdAt?.toDate()}</span>
    <p class="price">Rs.${product.price}</p>
    <p>${product.details}</p>
    <div><img src=${product.img} width="10%"></div>
  </div>`;
    });

});
