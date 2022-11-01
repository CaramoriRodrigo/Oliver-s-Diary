const book = document.getElementById("book");
const wpsValue = document.getElementById("wpsValue");
const wordsQuantityElement = document.getElementById("wordsQuantity");
const powerUp = document.getElementById("powerUpImg");
const powerUp2 = document.getElementById("powerUpImg2");
const powerUp3 = document.getElementById("powerUpImg3");
const powerUpDesc = document.getElementById("powerUpDesc");
const powerUpDesc2 = document.getElementById("powerUpDesc2");
const powerUpDesc3 = document.getElementById("powerUpDesc3");
let wordsQuantity = 0;
let clickPower = 1;
let wpsPower = 0;
let PowerUpClickLevel = 0;
const bookClick = new Audio("sounds/bookClick.mp3");
const PowerUpSound = new Audio("sounds/powerUp.mp3");
localStorage.getItem('wordsValue')
RunStorage()

function clickEvent(){
    bookClick.pause()
    wordsQuantity = wordsQuantity + clickPower
    wordsQuantityElement.textContent = wordsQuantity;
    clickSound();
}
function powerUpBuy1(){
    if(wordsQuantity >= 100){
    clickPower=2;
    document.getElementById("powerUp1").remove();
    wordsQuantity = wordsQuantity - 100;
    wordsQuantityElement.textContent = wordsQuantity;
    PowerUpClickLevel++
    PowerUpSound.play()
    alert("You increase in one your writing power!");
    }else{
        alert("You don't have 100 words yet...")
    }
}
function powerUpBuy2(){
    if(wordsQuantity >= 250){
    clickPower=3;
    document.getElementById("powerUp2").remove();
    wordsQuantity = wordsQuantity - 250;
    wordsQuantityElement.textContent = wordsQuantity;
    PowerUpClickLevel++
    PowerUpSound.play()
    alert("You increase in one your writing power!");
    }else{
        alert("You don't have 250 words yet...")
    }
}
function powerUpBuy3(){
    if(wordsQuantity >= 500){
    document.getElementById("powerUp3").remove();
    wordsQuantity = wordsQuantity - 500;
    wordsQuantityElement.textContent = wordsQuantity;
    wpsPower++
    PowerUpSound.play()
    wpsStart();
    alert("You increase in one your writing power por second!");
    }else{
        alert("You don't have 500 words yet...")
    }
}
book.addEventListener("click",clickEvent)
powerUp.addEventListener("click",powerUpBuy1)
powerUp2.addEventListener("click",powerUpBuy2)
powerUp3.addEventListener("click",powerUpBuy3)

window.addEventListener("mousemove",function(e) {   
    var X = e.clientX,
        Y = e.clientY;
        powerUpDesc.style.top = (Y + 20)  + 'px';
        powerUpDesc.style.left = (X + 20)  + 'px';
        powerUpDesc2.style.top = (Y + 20)  + 'px';
        powerUpDesc2.style.left = (X + 20)  + 'px';
        powerUpDesc3.style.top = (Y + 20)  + 'px';
        powerUpDesc3.style.left = (X + 20)  + 'px';
        PowerUpToolTip();
  });

function PowerUpToolTip(){
    powerUp.addEventListener("mouseover",function(){powerUpDesc.style.visibility = "visible";})
    powerUp.addEventListener("mouseleave",function(){powerUpDesc.style.visibility = "hidden";})
    powerUp2.addEventListener("mouseover",function(){powerUpDesc2.style.visibility = "visible";})
    powerUp2.addEventListener("mouseleave",function(){powerUpDesc2.style.visibility = "hidden";})
    powerUp3.addEventListener("mouseover",function(){powerUpDesc3.style.visibility = "visible";})
    powerUp3.addEventListener("mouseleave",function(){powerUpDesc3.style.visibility = "hidden";})
}
function wpsStart(){
    setInterval(() => {
        wordsQuantity = wordsQuantity + wpsPower
        wordsQuantityElement.textContent = wordsQuantity;
        wpsValue.textContent = wpsPower;
    }, 1000);
}
function clickSound(){
    bookClick.play()
}

function RunStorage(){setInterval(() => {
    localStorage.setItem('wordsValue', wordsQuantity)
},1000)}

