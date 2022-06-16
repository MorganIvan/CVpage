
let email =document.getElementById("email");
let phone=document.getElementById("phone");

var popUpScreen=document.getElementById("popUpScreen");
var popAd=document.getElementById("popAd");
let popBtn=document.getElementById("popBtn");

//sets the popadd onece so they dont show imediatly
popUpScreen.style.visibility="hidden";

function popUp(adress){
    popUpScreen.style.visibility = "visible";
    popAd.innerHTML =adress;
}
phone.addEventListener("click",()=>popUp("011 15 3923-6163"));
email.addEventListener("click",()=>popUp("mifossativionnet@gmail.com"));
popBtn.addEventListener("click",()=>{

    navigator.clipboard.writeText(popAd.innerHTML)
})
popUpScreen.addEventListener("click",()=>{
    popUpScreen.style.visibility="hidden";

})