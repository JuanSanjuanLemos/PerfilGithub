import dataJSON from "../../objects/profileCard/getData.js";

function writeDescription(){
    return /*html*/`
        <p class="dev-description">${dataJSON.bio}</p>   
    `
}

export default writeDescription;