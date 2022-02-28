import listDevs from "./objects/profileCard/addCard.js";

let elements = document.querySelector(".elements");

const addButton = document.getElementById("add-button");
addButton.addEventListener('click',writeList);

function writeList(event){
    elements.innerHTML = listDevs.join("");
    arrowLeft.style.display = "block";
    arrowRight.style.display = "block";
    elements.style.transform = `translateX(0px)`;
}

let transform = 0;

const arrowLeft = document.querySelector(".-left");
arrowLeft.addEventListener("click",function(){
    transform-=200;
    elements.style.transform = `translateX(${transform}px)`;
    
})
const arrowRight = document.querySelector(".-right");
arrowRight.addEventListener("click",function(){
    transform+=200;
    elements.style.transform = `translateX(${transform}px)`;
})