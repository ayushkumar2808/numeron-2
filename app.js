// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened
var playbutton = document.getElementById('play-button')
playbutton.onclick = newpage

function newpage(){
    location.href=('game.html')
}