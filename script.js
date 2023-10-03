
var wins = 0;
var ties = 0;
var defeats = 0;

function updateScore() {
    document.getElementById('winCount').textContent = wins;
    document.getElementById('tieCount').textContent = ties;
    document.getElementById('defeatCount').textContent = defeats;
}

function play(playerChoice) {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * 3)];
    var result = "";
    
    const emojis = new Map();
    emojis.set("rock", "&#9994");
    emojis.set("paper", "&#9995");
    emojis.set("scissors", "&#9996");

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
        document.getElementById('result-title').style.color = "yellow";
        ties++;

    } 
    else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')) {
        result = "You win!";
        document.getElementById('result-title').style.color = "lightgreen";
        wins++;
    } 
    else {
        result = "Computer wins!";
        document.getElementById('result-title').style.color = "red";
        defeats++;
    }
    document.getElementById('result-title').innerHTML = `${result}`
    document.getElementById('result').innerHTML = `You chose: ${emojis.get(playerChoice)} Computer choice: ${emojis.get(computerChoice)}.`;
   
    updateScore();
}
