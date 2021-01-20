var btnTranslate= document.querySelector("#trans-btn");
var txtIp= document.querySelector("#txt-ip");

function clickHandler () {
    console.log("clicked!!!!!!");
    console.log(txtIp.value);
}



btnTranslate.addEventListener("click", clickHandler)