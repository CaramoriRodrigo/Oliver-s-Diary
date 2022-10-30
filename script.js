const book = document.getElementById("book");
const wordsQuantityElement = document.getElementById("wordsQuantity");
const powerUp = document.getElementById("powerUpCard")
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
powerUpBuyButton.addEventListener("click",powerUpBuy)


// Localização do Mouse

document.querySelector('body').addEventListener('mousemove', function(event) {
    var posX = event.clientX,
        posY = event.clientY;
  });