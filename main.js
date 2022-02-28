import listDevs from "./objects/profileCard/addCard.js";

let root = document.getElementById("root");
root.innerHTML = listDevs;

const addButton = document.getElementById("add-button");
addButton.addEventListener('click',writeList);
function writeList(event){
    root.innerHTML = listDevs;

}