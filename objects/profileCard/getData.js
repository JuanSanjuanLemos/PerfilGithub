let dataJSON
const getDataProfile = (url) => {
    let request = new XMLHttpRequest();
    request.open("GET",url,false);
    request.send();
    return request.responseText;
}

function convertToJSON(url){
    let dataXML = getDataProfile(url)
    dataJSON = JSON.parse(dataXML);
}

convertToJSON("https://api.github.com/users/juansanjuanlemos");
export default dataJSON;
