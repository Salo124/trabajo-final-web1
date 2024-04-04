// vamos a seleccionar los elementos

const sunburstColor = document.querySelector(".sunburst");
const blackColor = document.querySelector(".black");
const whiteColor = document.querySelector(".white");

const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];
const imageCard = document.querySelector(".img-container");
const feedbackBtn= document.querySelector(".feedback");
const btnTxt = document.querySelector(".button-text");

sunburstColor.addEventListener("click",function(){
    cartButton.style.backgroundColor = " #C4603B";
    btnTxt.style.color = "white";
    itemTag.style.backgroundColor = "#C4603B";
    itemTag.style.color ="white";
    imageCard.style.backgroundImage = 'url(./img/guitarraRoja.jpg)'
})
blackColor.addEventListener("click",function(){
    cartButton.style.backgroundColor = "black";
    btnTxt.style.color = "white";
    itemTag.style.backgroundColor = "black";
    itemTag.style.color ="white";
    imageCard.style.backgroundImage = 'url(./img/stratocaster.jpg)'
})
whiteColor.addEventListener("click",function(){
    cartButton.style.backgroundColor = " whitesmoke";
    btnTxt.style.color = "black";
    itemTag.style.backgroundColor = "whitesmoke";
    itemTag.style.color ="black";
    imageCard.style.backgroundImage = 'url(./img/guitarrista.jpg)'
})



const cart =()=>{
    cartButton.style.display ="none";
    feedbackBtn.style.display="block";

}
cartButton.addEventListener("click", cart);

const feedback = ()=>{

    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
}
feedbackBtn.addEventListener("click", feedbackFun)