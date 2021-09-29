let hamburger= document.getElementById("hamburger-container");
hamburger.addEventListener("click", displaymenu)

function displaymenu() {
    let menu = document.getElementById("header")
    menu.classList.toggle("displayed")
}