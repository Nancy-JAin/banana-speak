var btnTranslate= document.querySelector("#trans-btn");
var txtIp= document.querySelector("#txt-ip");
var txtOp= document.querySelector("#txt-op");

var serverUrl= "https://api.funtranslations.com/translate/minion.json"

function constructUrl(text) {
    return serverUrl + "?" + "text=" + text;
}

function errorHandler (error){
    console.log("error occured", error);
    alert("come after some time");
}

function clickHandler () {

    fetch(constructUrl(txtIp.value))
    .then(response => response.json())
    .then(json => {
        var translatedTxt = json.contents.translated;
        txtOp.innerText = translatedTxt;
    })
    .catch(errorHandler)
}


btnTranslate.addEventListener("click", clickHandler)