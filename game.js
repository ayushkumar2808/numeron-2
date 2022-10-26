// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

var number1 = document.getElementById('number1')
var number2 = document.getElementById('number2')
var number3 = document.getElementById('number3')
var buttons = document.getElementById('buttons')
buttons.onclick = change_num
let scores = 0

function change_num(){
    number1.innerHTML= Math.floor((Math.random() * 100));
    number2.innerHTML= Math.floor((Math.random() * 100));
    qtr()
    scores++;
}
if(window.location.reload){
    number1.innerHTML= Math.floor((Math.random() * 100) + 1);
    number2.innerHTML= Math.floor((Math.random() * 100) + 1);
    qtr()
    
}

const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const multiply = document.getElementById('mul')
const divide = document.getElementById('divide')
const modulus = document.getElementById('modulus')
function qtr(){
openindex = Math.floor(Math.random()*5) 
switch(openindex){
    case 0: number3.innerHTML = parseInt(number1.innerHTML,10) + parseInt(number2.innerHTML,10); break
    
    case 1: number3.innerHTML = parseInt(number1.innerHTML,10) - parseInt(number2.innerHTML,10); break
    case 2: number3.innerHTML = parseInt(number1.innerHTML,10) * parseInt(number2.innerHTML,10); break
    case 3: number3.innerHTML = (parseInt(number1.innerHTML) / parseInt(number2.innerHTML)).toFixed(1); break
    case 4: number3.innerHTML = parseInt(number1.innerHTML,10) % parseInt(number2.innerHTML,10); break
}

}




plus.onclick = plusss
minus.onclick=minusss
multiply.onclick=mulll
divide.onclick=divideee
modulus.onclick=modulusss

function modulusss(){
    if(parseInt(number1.innerHTML,10) % parseInt(number2.innerHTML,10)==number3.innerHTML){
        scoreinc()
    }
    else{
        gameover()
    }
   
}

function divideee(){
    if((parseInt(number1.innerHTML,10) / parseInt(number2.innerHTML,10)).toFixed(1)==number3.innerHTML){
        scoreinc()
    }
    else{
        gameover()
    }
  
}

function mulll(){
    if(parseInt(number1.innerHTML,10) * parseInt(number2.innerHTML,10)==number3.innerHTML){
        scoreinc()
    }
    else{
        gameover()
    }
   
}

function minusss(){
    if(parseInt(number1.innerHTML,10) - parseInt(number2.innerHTML,10)==number3.innerHTML){
        scoreinc()
    }
    else{
        gameover()
    }
  
}
function plusss(){

    if(parseInt(number1.innerHTML,10) + parseInt(number2.innerHTML,10)==number3.innerHTML){
        scoreinc()
    }
    else{
        gameover()
    }
   
}
function scoreinc(){
    t=20
}


let t=20;
timer.innerHTML=t;
function runTimer()
{
    timer.innerHTML=t;
    if(t==0) {
        clearInterval(abcd)
        gameover()
    }
    t--;
    sessionStorage.setItem("scores",scores)

}

let abcd=setInterval(runTimer,1000)
function gameover(){
    
    location.href=('gameover.html')
}