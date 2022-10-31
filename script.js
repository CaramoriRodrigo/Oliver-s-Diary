const book = document.getElementById("book");
const wordsQuantityElement = document.getElementById("wordsQuantity");
const powerUp = document.getElementById("powerUpImg")
const powerUpDesc = document.getElementById("powerUpDesc")
let wordsQuantity = 0;
let clickPower = 1;
let PowerUpClickLevel = 0;



function clickEvent(){
    wordsQuantity = wordsQuantity + clickPower
    wordsQuantityElement.textContent = wordsQuantity;
}
function powerUpBuy(){
    if(wordsQuantity >= 100){
    clickPower=2;
    powerUp.remove();
    wordsQuantity = wordsQuantity - 100;
    PowerUpClickLevel++
    alert("You increase in one your writing power!");
    }else{
        alert("You don't have 100 words yet...")
    }
}
book.addEventListener("click",clickEvent)
powerUp.addEventListener("click",powerUpBuy)

window.addEventListener("mousemove",function(e) {   
    var X = e.clientX,
        Y = e.clientY;
        powerUpDesc.style.top = (Y + 20)  + 'px';
        powerUpDesc.style.left = (X + 20)  + 'px';
        PowerUpToolTip();
  });

function PowerUpToolTip(){
    powerUp.addEventListener("mouseover",function(){powerUpDesc.style.visibility = "visible";})
    powerUp.addEventListener("mouseleave",function(){powerUpDesc.style.visibility = "hidden";})
}