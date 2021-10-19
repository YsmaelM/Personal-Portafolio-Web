document.addEventListener("click", clickEventManager);
document.addEventListener("scroll", ChangeDisplay);
let hamburger = document.getElementById("hamburger-container");
let menu = document.getElementById("header");

function clickEventManager(e) {
  if (
    e.target.className === "hamburger-container" ||
    e.target.className === "hamburger-icon"
  ) {
    menu.classList.toggle("displayed");
  } else if (e.target.className !== "nav-link") {
    menu.classList.remove("displayed");
  }
}

/* Welcome Animation Containers */

const welcome_container = document.getElementById("welcome-container");
const welcome_section = document.getElementById("welcome-section");
/* skills bar animation */
const skill_container = document.getElementById("skill-container");
let skill_bars = [...document.getElementsByClassName("skill-progress")];

/* 
function moveUp_percentage() {
  [...document.querySelectorAll(".skill-progress")].forEach((el)=>{
    let p = 0,
    attr= "--porcentage",
    max= parseInt(el.classList[2])+1,
    moveUp = setInterval(() => {
      
      console.log(p)
        if (p<max) {
          el.style.setProperty(`${attr}`, `"${p}%"`)
          p++
        }
          
        if (p==max ||!isInViewport(skill_container) ) {
          clearInterval(moveUp)
        }
        
        if (!isInViewport(skill_container)) {
          p= 100
         let moveDown = setInterval(() => {
          el.style.setProperty(`${attr}`, `"${p}%"`)
          p--
          if (p<0) {
            clearInterval(moveDown)
          }
          }, 20);
        }
      }, 20);
)})} */


/* 
  function moveDown_percentage() {
    [...document.querySelectorAll(".skill-progress")].forEach((el)=>{
      let d = parseInt(el.classList[2])+1,
      attr= "--porcentage",
      min= 0;
        let intervalID = setInterval(() => {
          el.style.setProperty(`${attr}`, `"${d}%"`)
          d--
          if (d==min) {
            clearInterval(intervalID)
          }
        }, 200);
      }
    )} */


ChangeDisplay();
function ChangeDisplay() {
  if (isInViewport(welcome_container)) {
    [...welcome_container.children].forEach((el) => {
      el.classList.add("displayed");
    });
  } else {
    [...welcome_container.children].forEach((el) => {
      el.classList.remove("displayed");
    });
  }

  if (isInViewport(skill_container)) {
   /*  moveUp_percentage() */
    skill_bars.forEach((element) => {
      element.classList.add("animated");
    });
  } else {
   
    skill_bars.forEach((element) => {
      element.classList.remove("animated");
    });
  }
}

function getActualPosition(element) {
  const item = element.getBoundingClientRect().top;
  return item;
}

/* IS IN VIEWPORT FUNCTION */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
