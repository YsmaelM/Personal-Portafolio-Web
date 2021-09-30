let hamburger= document.getElementById("hamburger-container");
let menu = document.getElementById("header")
hamburger.addEventListener("click", displaymenu)
document.addEventListener("click", hidemenu)


function displaymenu() {
    menu.classList.toggle("displayed")
}
function hidemenu(e) {
    console.log(e.target.className)
    if (e.target.className != "nav-link" && e.target
    .className != "hamburger-icon") {
        menu.classList.remove("displayed")
    }
}

// Import the functions you need from the SDKs you need
/* import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { } from 'firebase/storage';
import { } from 'firebase/storage';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB17Llp6521stWO2ubTWI-VOtlzHhtYQWA",
  authDomain: "ysmael-s-portafolio.firebaseapp.com",
  projectId: "ysmael-s-portafolio",
  storageBucket: "ysmael-s-portafolio.appspot.com",
  messagingSenderId: "180683888441",
  appId: "1:180683888441:web:4a4ae028fca8fc65b1bae8",
  measurementId: "G-7D8TT58J11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);