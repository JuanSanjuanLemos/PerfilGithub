let elements = document.querySelector(".elements");
let devUser;
let dataJSON;
let result;
let listDevs=[];

const addButton = document.getElementById("add-button");
addButton.addEventListener('click',function(){
    document.querySelector(".window-newDev").style.display = "block";
})


const addDev = document.getElementById("add-dev");
const getUser = document.getElementById("user");
addDev.addEventListener('click',function(){
    devUser = getUser.value;
    getUser.value="";   
    convertToJSON(`https://api.github.com/users/${devUser}`)
    addCard();
    writeList();
});

let transform = 0;

const arrowLeft = document.querySelector(".-left");
arrowLeft.addEventListener("click",function(){
    transform-=200;
    elements.style.transform = `translateX(${transform}px)`;
    
})
const arrowRight = document.querySelector(".-right");
arrowRight.addEventListener("click",function(){
    transform+=200;
    elements.style.transform = `translateX(${transform}px)`;
})


function writeList(){
    document.querySelector(".window-newDev").style.display = "none";
    elements.innerHTML = listDevs.join("");
    console.log(listDevs)
    arrowLeft.style.display = "block";
    arrowRight.style.display = "block";
    elements.style.transform = `translateX(0px)`;
}

function createAvatarProfile(){
    return /*html*/`
        <img class="avatar-profile" src="${dataJSON.avatar_url}">
    `
}

function writeDescription(){
    return /*html*/`
        <p class="dev-description">${dataJSON.bio}</p>   
    `
}

function writeDevName(){
    return /*html*/`
        <span class="dev-name">${dataJSON.name}</span>
    `
}

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

function createCard(){
    if(dataJSON!="erro"){
        return /*html*/`
        <article class="profile-card">
            ${createAvatarProfile()}
            ${writeDevName()}
            ${writeDescription()}
            ${createDevLinks()}
        </article>
    `
    }else{
        return ""
    }
}

const GetDataProfile = (url) => {
    let request = new XMLHttpRequest();
    request.open("GET",url,false);
    request.onload = ()=>{
        console.log(request);
        console.log(request.status)
        if(request.status!= 200){
            result = "erro"
            console.log(result);
        }else{
            console.log("aqui")
            result = request.responseText;
        }
    }
    request.send();
    return result;
}
function convertToJSON(url){
    let dataXML = GetDataProfile(url)
    if(dataXML==="erro"){
        dataJSON="erro";
    }else{
        dataJSON = JSON.parse(dataXML);
        console.log(dataJSON)
    }
}
function addCard(){
    if(createCard!=""){
        listDevs.unshift(createCard());
        console.log(listDevs)
    }
}