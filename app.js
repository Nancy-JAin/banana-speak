var btnTranslate= document.querySelector("#trans-btn");
var txtIp= document.querySelector("#txt-ip");
var txtOp= document.querySelector("#txt-op");

function clickHandler () {
    txtOp.innerText = "translated " +txtIp.value; 
}



btnTranslate.addEventListener("click", clickHandler)