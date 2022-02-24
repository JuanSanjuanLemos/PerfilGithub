import dataJSON from "../../objects/profileCard/getData.js";

function createDevLinks(){
    return /*html*/`
        <a href="${dataJSON.html_url}" class="wrapper-img">
            <img class="img-link" src="./img/logo-github.png" alt="Logo GitHub">
        </a>
    `
}
export default createDevLinks;