
document.addEventListener("click", eventManager);
let hamburger= document.getElementById("hamburger-container");
let menu = document.getElementById("header");

function eventManager(e) {

if (e.target.className === "hamburger-container" || e.target.className === "hamburger-icon") {
    menu.classList.toggle("displayed")
}else if (e.target.className !=="nav-link"){
    menu.classList.remove("displayed")
}
}

