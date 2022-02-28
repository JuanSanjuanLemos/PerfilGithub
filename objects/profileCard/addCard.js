import createCard from "./index.js";
let listDevs=[];

const addDev = document.getElementById("add-dev");
addDev.addEventListener('click',addCard)
function addCard(event){
    if(createCard!=""){
        listDevs.unshift(createCard());
        console.log(listDevs);
    }
}

export default listDevs;