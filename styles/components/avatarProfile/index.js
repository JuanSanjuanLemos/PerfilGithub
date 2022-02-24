import dataJSON from "../../objects/profileCard/getData.js";

function createAvatarProfile(){
    return /*html*/`
        <img class="avatar-profile" src="${dataJSON.avatar_url}">
    `
}

export default createAvatarProfile;