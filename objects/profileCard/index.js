import createAvatarProfile from "../../components/avatarProfile/index.js";
import createDevLinks from "../../components/devLinks/index.js";
import writeDevName from "../../components/devName/index.js";
import dataJSON from "./getData.js";

function createCard(){
    if(dataJSON!="erro"){
        return /*html*/`
        <article class="profile-card">
            ${createAvatarProfile()}
            ${writeDevName()}
            ${createDevLinks()}
        </article>
    `
    }else{
        return ""
    }

}
export default createCard;