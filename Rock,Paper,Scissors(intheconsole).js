// Rock, Paper, Scissors developed by Jake Robertson !


const prompt = require('prompt-sync')();

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    while (true) {
        let player = prompt('Please enter either rock, paper, or scissors: ').toLowerCase();
        if (['rock', 'paper', 'scissors'].includes(player)) {
            return player;
        }
        console.log('Invalid input. Please enter either rock, paper, or scissors.');
    }
}

function playRound() {
    const computer = getComputerChoice();
    const player = getPlayerChoice();
    console.log(`CPU says: My choice is ${computer}!`);

    if (computer === player) {
        console.log('Tie! Please play again!');
        return;
    }

    const winConditions = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    if (winConditions[player] === computer) {
        playerScore++;
        console.log(`Player wins this round! ${player} beats ${computer}!`);
    } else {
        computerScore++;
        console.log(`CPU wins this round! ${computer} beats ${player}!`);
    }
}

// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         playRound();
//     }

//     console.log(`Final Score - Player: ${playerScore}, CPU: ${computerScore}`);

//     if (playerScore > computerScore) {
//         console.log('Player wins the game! Congratulations!');
//     } else if (computerScore > playerScore) {
//         console.log('CPU wins the game! Better luck next time!');
//     } else {
//         console.log("It's a tie!");
//     }
// }


// Play 1 round
playRound();

// Run the game
// playGame();