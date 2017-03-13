var prompt = require("prompt-sync").prompt;


/*-- Initializing some variables --*/
//board variables
var columnWinner = false;
var diagonalWinner = false;
var rowWinner = false;

//game variables
var counter = 0;
//var currentMove = null;

//player variables
var currentPlayer = null;
var player1 = null;
var player2 = null;
var winner = false;
var giveUp = false;

/*-- Done initializing variables --*/



/**--THE BOARD --*/
// Game board stored as nested arrays
var gameBoard = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "]
];

// function to print game board that is blank
var blankBoard = function() {
  console.log("          1   2   3  ");
  console.log("        ~~~~~~~~~~~~~");
  console.log("      1 |   |   |   |");
  console.log("        ~~~~~~~~~~~~~");
  console.log("      2 |   |   |   |");
  console.log("        ~~~~~~~~~~~~~");
  console.log("      3 |   |   |   |");
  console.log("        ~~~~~~~~~~~~~");
  console.log("                                         ");
  console.log("- - - - - - - - - - - - - - - - - - - - - - -");
  console.log("                                         ");
};


//Player's co-ordinates as an array
var currentMove = [];
var move = [];

//function to get move of current player
var askMove = function() {
  console.log("Enter your move in the this format: # #")
  currentMove = prompt();
  if (currentMove === "forfeit"){
    giveUp = true;
    console.log("Game ended.");

    if (currentPlayer === player1) {
      console.log("Player 2 WINS!");
    } else {
      console.log("Player 1 WINS!");
    }
  }
}

//function to check the winner
var checkWinner = function() {
  if ((gameBoard[0][0] + gameBoard[1][1] + gameBoard[2][2] === "XXX") ||
      (gameBoard[0][0] + gameBoard[1][1] + gameBoard[2][2] === "OOO") ||
      ((gameBoard[0][2] + gameBoard[1][1] + gameBoard[2][0] === "XXX") || 
       (gameBoard[0][2] + gameBoard[1][1] + gameBoard[2][0] === "OOO"))){
    diagonalWinner = true;
  }
  
  else if ((gameBoard[0][0] + gameBoard[0][1] + gameBoard[0][2] === "XXX") || 
           (gameBoard[0][0] + gameBoard[0][1] + gameBoard[0][2] === "OOO") || 
           (gameBoard[1][0] + gameBoard[1][1] + gameBoard[1][2] === "XXX") || 
           (gameBoard[1][0] + gameBoard[1][1] + gameBoard[1][2] === "OOO") || 
           (gameBoard[2][0] + gameBoard[2][1] + gameBoard[2][2] === "XXX") || 
           (gameBoard[2][0] + gameBoard[2][1] + gameBoard[2][2] === "OOO")){
    rowWinner = true;
  }
  
  else if ((gameBoard[0][0] + gameBoard[1][0] + gameBoard[2][0] === "XXX") || 
           (gameBoard[0][0] + gameBoard[1][0] + gameBoard[2][0] === "OOO") || 
           (gameBoard[0][1] + gameBoard[1][1] + gameBoard[2][1] === "XXX") || 
           (gameBoard[0][1] + gameBoard[1][1] + gameBoard[2][1] === "OOO") || 
           (gameBoard[0][2] + gameBoard[1][2] + gameBoard[2][2] === "XXX") || 
           (gameBoard[0][2] + gameBoard[1][2] + gameBoard[2][2] === "OOO")){
    columnWinner = true;
  }
  
  else if (counter === 9){
    noWinner = true;
    winner = true;
  }
};

var congrats = function() {
  if (diagonalWinner) {
    console.log(currentPlayer + " is the winner!");
    winner = true;
  }
  else if (rowWinner) {
    console.log(currentPlayer + " is the winner!");
    winner = true;
  }
  else if (columnWinner) {
    console.log(currentPlayer + " is the winner!");
    winner = true;
  }
  else if (counter === 9) {
    console.log("No winner!  Play again");
    noWinner = true;
  }
  
}



//BEGIN GAME
currentPlayer = player1;