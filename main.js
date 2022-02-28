import listDevs from "./objects/profileCard/addCard.js";

const addButton = document.getElementById("add-button");
addButton.addEventListener('click',writeList);
function writeList(event){

    $root.insertAdjacentHTML(
        'beforeend',
        `
        ${listDevs}
    `)
}