import listDevs from "./objects/profileCard/addCard.js";

let elements = document.querySelector(".elements");
let devUser;
const addButton = document.getElementById("add-button");
addButton.addEventListener('click',function(){
    document.querySelector(".window-newDev").style.display = "block";
})


const addDev = document.getElementById("add-dev");
const getUser = document.getElementById("user");
addDev.addEventListener('click',function(){
    writeList();
    devUser = getUser.value;
    getUser.value="";
});

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


function writeList(){
    document.querySelector(".window-newDev").style.display = "none";
    elements.innerHTML = listDevs.join("");
    console.log(listDevs)
    arrowLeft.style.display = "block";
    arrowRight.style.display = "block";
    elements.style.transform = `translateX(0px)`;
}

export default devUser;