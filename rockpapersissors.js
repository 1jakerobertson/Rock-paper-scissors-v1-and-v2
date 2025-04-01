// rock paper sissors

// generate a number between 1 and 3 
// 1=rock, 2=paper, 3=scissors

const prompt = require('prompt-sync')();

var x = 0;
var computer = '';
var player = '';
var playerScore = 0;
var computerScore = 0;

function getComputerChoice (){
    var x = Math.floor(Math.random() * 3) + 1;
    if (x == 1) {
        computer = 'rock'
    } else if (x == 2) {
        computer = 'paper'
    } else {
        computer = 'scissors'
    };

    console.log(`CPU says: My choice is ${computer}!`);
}

function getPlayerChoice() {
    while (true) {
        player = prompt('Please enter either rock, paper, or scissors: ').toLowerCase();
        if (player === 'rock' || player === 'paper' || player === 'scissors') {
            console.log("Valid input!");
            break; // Exit the loop when input is valid
        } else {
            console.log('Invalid input. Please enter either rock, paper, or scissors.');
        }
    }
}

function playRound(){
    // cpu, player booleans
    var computerWin = false;
    var playerWin = false;

    // victor determining logic
    if (computer == 'rock' &&  player == 'scissors'){
        computerWin = true, playerWin = false;
    } else if (computer == 'rock' && player == 'paper') {
        computerWin = false, playerWin = true;
    } else if (computer == 'rock' && player == 'rock') {
        computerWin = false, playerWin = false;
    } else if (computer == 'scissors' && player == 'rock'){
        computerWin = false, playerWin = true;
    } else if (computer == 'scissors' && player == 'paper'){
        computerWin = true, playerWin = false;
    } else if (computer == 'scissors' && player == 'scissors'){
        computerWin = false, playerWin = false;
    } else if (computer == 'paper' && player == 'rock'){
        computerWin = true, playerWin = false; 
    } else if (computer == 'paper' && player == 'scissors'){
        computerWin = false, playerWin = true;
    } else if (computer == 'paper' && player == 'paper'){
        computerWin = false, playerWin = false;
    }

    // score and console logging winner 
    if (computerWin == true){
        computerScore += 1;
        console.log (`CPU wins! ${computer} beats ${player}!`);
    } else if (playerWin == true){
        playerScore += 1;
        console.log (`Player wins! ${player} beats ${computer}!`);
    } else {
        console.log("Tie! Please play again!");
    }
} 

function 


getComputerChoice();

getPlayerChoice();

playRound();