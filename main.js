import listDevs from "./objects/profileCard/addCard.js";

let sectionCards = document.querySelector(".section-cards");
sectionCards.innerHTML = listDevs;

const addButton = document.getElementById("add-button");
addButton.addEventListener('click',writeList);
function writeList(event){
    sectionCards.innerHTML = listDevs;

}