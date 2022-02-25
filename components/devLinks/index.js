import dataJSON from "../../objects/profileCard/getData.js";

function createDevLinks(){
    var re = new RegExp("^((linkedin.com\/))")
    if(re.test(dataJSON.blog)){
        return /*html*/`
        
        <div class="wrapper-links">
            <a href="${dataJSON.html_url}" class="wrapper-img">
                <img class="img-link" src="./img/logo-github.png" alt="Logo GitHub">
            </a>
            <a href="https://${dataJSON.blog}" class="wrapper-img">
                <img class="img-link" src="./img/logo-linkedin.png" alt="Logo Linkedin">
            </a>
        </div>
        `
    }else{
        return/*html*/`
        <a href="${dataJSON.html_url}" class="wrapper-img">
                <img class="img-link" src="./img/logo-github.png" alt="Logo GitHub">
        </a>
        `
    }
}
export default createDevLinks;