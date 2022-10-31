const book = document.getElementById("book");
const wordsQuantityElement = document.getElementById("wordsQuantity");
const powerUp = document.getElementById("powerUpImg");
const powerUp2 = document.getElementById("powerUpImg2");
const powerUpDesc = document.getElementById("powerUpDesc");
const powerUpDesc2 = document.getElementById("powerUpDesc2");
let wordsQuantity = 0;
let clickPower = 1;
let PowerUpClickLevel = 0;



function clickEvent(){
    wordsQuantity = wordsQuantity + clickPower
    wordsQuantityElement.textContent = wordsQuantity;
}
function powerUpBuy1(){
    if(wordsQuantity >= 100){
    clickPower=2;
    document.getElementById("powerUp1").remove();
    wordsQuantity = wordsQuantity - 100;
    PowerUpClickLevel++
    alert("You increase in one your writing power!");
    }else{
        alert("You don't have 100 words yet...")
    }
}
function powerUpBuy2(){
    if(wordsQuantity >= 250){
    clickPower=3;
    document.getElementById("powerUp2").remove();
    wordsQuantity = wordsQuantity - 100;
    PowerUpClickLevel++
    alert("You increase in one your writing power!");
    }else{
        alert("You don't have 250 words yet...")
    }
}
book.addEventListener("click",clickEvent)
powerUp.addEventListener("click",powerUpBuy1)
powerUp2.addEventListener("click",powerUpBuy2)

window.addEventListener("mousemove",function(e) {   
    var X = e.clientX,
        Y = e.clientY;
        powerUpDesc.style.top = (Y + 20)  + 'px';
        powerUpDesc.style.left = (X + 20)  + 'px';
        powerUpDesc2.style.top = (Y + 20)  + 'px';
        powerUpDesc2.style.left = (X + 20)  + 'px';
        PowerUpToolTip();
  });

function PowerUpToolTip(){
    powerUp.addEventListener("mouseover",function(){powerUpDesc.style.visibility = "visible";})
    powerUp.addEventListener("mouseleave",function(){powerUpDesc.style.visibility = "hidden";})
    powerUp2.addEventListener("mouseover",function(){powerUpDesc2.style.visibility = "visible";})
    powerUp2.addEventListener("mouseleave",function(){powerUpDesc2.style.visibility = "hidden";})
}