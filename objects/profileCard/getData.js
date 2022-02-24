let dataJSON;
let result;
const getDataProfile = (url) => {
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
    let dataXML = getDataProfile(url)
    if(dataXML==="erro"){
        dataJSON="erro";
    }else{
        dataJSON = JSON.parse(dataXML);
    }
}

convertToJSON("https://api.github.com/users/juansanjuanlemos");
export default dataJSON;
