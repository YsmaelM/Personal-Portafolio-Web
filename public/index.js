
document.addEventListener("click", clickEventManager);
document.addEventListener("scroll", ChangeDisplay)
let hamburger= document.getElementById("hamburger-container");
let menu = document.getElementById("header");

function clickEventManager(e) {

if (e.target.className === "hamburger-container" || e.target.className === "hamburger-icon") {
    menu.classList.toggle("displayed")
}else if (e.target.className !=="nav-link"){
    menu.classList.remove("displayed")
}
}

/* Welcome Animation Containers */

let welcome_container = document.getElementById("welcome-container");
let welcome_section = document.getElementById("welcome-section")



ChangeDisplay()
function ChangeDisplay() {
    if(isInViewport(welcome_container)){
        [...welcome_container.children].forEach((el)=>{el.classList.add("displayed")})
    } else {
        [...welcome_container.children].forEach((el)=>{el.classList.remove("displayed")})
    }
}

function getActualPosition(element) {
    const item = element.getBoundingClientRect().top
    return item
}


/* IS IN VIEWPORT FUNCTION */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
