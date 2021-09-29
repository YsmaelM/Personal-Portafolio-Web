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