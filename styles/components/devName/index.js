import dataJSON from "../../objects/profileCard/getData.js";
function writeDevName(){
    return /*html*/`
        <span class="dev-name">${dataJSON.name}</span>
    `
}

export default writeDevName;