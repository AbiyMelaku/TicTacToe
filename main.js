var prompt = require("prompt-sync").prompt;


/*-- Initializing some variables --*/
//board variables
var columnWinner = false;
var diagonalWinner = false;
var rowWinner = false;

//game variables
var counter = 0;
//var currentMove = null;
var goodMove = false;

//player variables
var currentPlayer = null;
var player1 = null;
var player2 = null;
var winner = false;
var giveUp = false;

/*-- Done initializing variables --*/

//Player's co-ordinates as an array
var currentMove = [];
var move = [];


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

// function to check for valid input
var validMove = function() {
  if (currentMove.length !== 3){
    console.log("Invalid input: you must enter the x and y coordinates separated by a space");
  }
  else if (currentMove.length === 3){
    var x = currentMove.substr(0,1);
    var y = currentMove.substr(2,1);

    if (currentMove.substr(1,1) !== " "){
      console.log("Invalid input: you must enter the x and y coordinates separated by a space");
    }

    else if ( ((x < 1) || (x > 3)) || ((y < 1) || (y > 3)) ){
      console.log("Invalid input: those coordinates are outside the playable area");
    }
    else if ( (gameBoard[y-1][x-1] === "X") || (gameBoard[y-1][x-1] === "O") ){
      console.log("Invalid input: that space is already taken");
    }
    else {
      goodMove = true;
    }
  }
};



//BEGIN GAME
currentPlayer = player1;