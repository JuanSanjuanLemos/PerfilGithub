import createCard from "./index.js";
let listDevs=[];

const addButton = document.getElementById("add-button");
addButton.addEventListener('click',addCard)
function addCard(event){
    if(createCard!=""){
        listDevs.unshift(createCard());
        console.log(listDevs);
    }
}

export default listDevs;