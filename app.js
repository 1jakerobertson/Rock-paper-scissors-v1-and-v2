// Rock, Paper, Scissors developed by Jake Robertson !


// const prompt = require('prompt-sync')();

let playerScore = 0;
let computerScore = 0;


function playgame() {
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






// Run the game
playGame();

