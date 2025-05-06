// Rock, Paper, Scissors developed by Jake Robertson !


// const prompt = require('prompt-sync')();

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
const maxRounds = 5;
const gameResultDiv = document.getElementById('gameResult');


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
    let playerWin = false;
    let computerWin = false;

    const playerChoiceText = document.querySelector('.player-choice-text');
    const computerChoiceText = document.querySelector('.computer-choice-text');
    
    const roundResultDiv = document.getElementById('roundResult');

    playerChoiceText.textContent = 'Player chose ' + player + ".";
    computerChoiceText.textContent = 'Computer chose ' + computer + ".";

    if (player === computer){
        roundResultDiv.textContent = 'It is a tie!';
        return;
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer=== 'rock') ||
        (player === 'scissors' && computer === 'paper')) 
    {
        playerWin = true;
        computerWin = false;
    } else {
        computerWin = true;
        playerWin = false;
    }
    

    if (playerWin) {
        playerScore +=1;
        document.querySelector('.p-count').textContent = playerScore;
        roundResultDiv.textContent = 'Player wins this round!';
    } else if (computerWin) {
        computerScore +=1;
        document.querySelector('.c-count').textContent = computerScore;
        roundResultDiv.textContent = 'Computer wins this round!';
    }

    roundCount++;
    };


if (roundCount === maxRounds) {
    // Decide who won
    if (playerScore > computerScore) {
        gameResultDiv.textContent = 'Player wins the game!';
    } else if (computerScore > playerScore) {
        gameResultDiv.textContent = 'Computer wins the game!';
    } else {
        gameResultDiv.textContent = 'The game is a tie!';
    }
    
    // Disable buttons
    const buttons = document.querySelectorAll('.rock, .paper, .scissors');
    buttons.forEach(button => button.disabled = true);
    
}


// Play full game
playGame();
