import { db, collection, addDoc, getDocs } from "../js/firebase.js";
const detailsDiv = document.querySelector(".divValue");

const dataValue = {
    model: "iphone",
    price: "000",
    detail: "nice good",

}

const myCollection = await collection(db, "users");

try {
    const docRef = await addDoc(myCollection, dataValue);
    console.log("Document written with ID: ", docRef.id);
} catch (e) {
    console.error("Error adding document: ", e);
}

const querySnapshot = await getDocs(myCollection);
querySnapshot.forEach((doc) => {

    const product = doc.data();
    detailsDiv.innerHTML += `
    <div class="parentDiv">
     <div>${product.detail}</div>
     <div>${product.model}</div>
     <div>${product.price}</div>
    </div>`
    console.log(product);
    console.log(detailsDiv);

});