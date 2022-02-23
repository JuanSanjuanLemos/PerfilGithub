import createAvatarProfile from "../../components/avatarProfile/index.js";
import createDevLinks from "../../components/devLinks/index.js";
import writeDevName from "../../components/devName/index.js";

function createCard(){
    return /*html*/`
        <article class="profile-card">
            ${createAvatarProfile()}
            ${writeDevName()}
            ${createDevLinks()}
        </article>
    `
}
export default createCard;