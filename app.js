// Rock, Paper, Scissors developed by Jake Robertson !


// const prompt = require('prompt-sync')();

let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}


function playGame() {
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorBtn = document.querySelector('.scissors');
    const playerChoices = [rockBtn, paperBtn, scissorBtn];
    const computerChoices = ['rock', 'paper', 'scissors'];

    playerChoices.forEach(button => {
        button.addEventListener('click', () => {
            const playerMove = button.className; // 'rock', 'paper', or 'scissors'
            const computerMove = getComputerChoice();
            playRound(playerMove, computerMove);
        });
    });
};

function playRound(player, computer){
    const playerChoiceText = document.querySelector('.player-choice-text');
    const computerChoiceText = document.querySelector('.computer-choice-text');
    
    const resultDiv = document.getElementById('result');

    playerChoiceText.textContent = 'Player chose ' + player + ".";
    computerChoiceText.textContent = 'Computer chose ' + computer + ".";
}





// Run the game
playGame();

