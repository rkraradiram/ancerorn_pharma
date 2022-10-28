const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".n-menu");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".n-link").forEach(n=>n.addEventListener("click",()=>{hamburger.classList.remove("active");
    navMenu.classList.remove("active");}
))