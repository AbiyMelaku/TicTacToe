// Game board stored as nested arrays
var gameBoard = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "]
];


//Player's co-ordinates as an array
var currentMove = [];
var move = [];

//initialize some variables
var columnWinner = false;
var diagonalWinner = false;

//function to get move of current player
var askMove = function() {
  console.log("Enter your move in the this format: # #")
}

//function to check the winner
var checkWinner = function() {
  if ((gameBoard[0][0] + gameBoard[1][1] + gameBoard[2][2] === "XXX") ||
      (gameBoard[0][0] + gameBoard[1][1] + gameBoard[2][2] === "OOO") ||
      ((gameBoard[0][2] + gameBoard[1][1] + gameBoard[2][0] === "XXX") || 
       (gameBoard[0][2] + gameBoard[1][1] + gameBoard[2][0] === "OOO"))) {
    diagonalWinner = true;
  }
  
  else if ((gameBoard[0][0] + gameBoard[0][1] + gameBoard[0][2] === "XXX") || 
           (gameBoard[0][0] + gameBoard[0][1] + gameBoard[0][2] === "OOO") || 
           (gameBoard[1][0] + gameBoard[1][1] + gameBoard[1][2] === "XXX") || 
           (gameBoard[1][0] + gameBoard[1][1] + gameBoard[1][2] === "OOO") || 
           (gameBoard[2][0] + gameBoard[2][1] + gameBoard[2][2] === "XXX") || 
           (gameBoard[2][0] + gameBoard[2][1] + gameBoard[2][2] === "OOO")) {
    rowWinner = true;
  }
  
  else if ((gameBoard[0][0] + gameBoard[1][0] + gameBoard[2][0] === "XXX") || 
           (gameBoard[0][0] + gameBoard[1][0] + gameBoard[2][0] === "OOO") || 
           (gameBoard[0][1] + gameBoard[1][1] + gameBoard[2][1] === "XXX") || 
           (gameBoard[0][1] + gameBoard[1][1] + gameBoard[2][1] === "OOO") || 
           (gameBoard[0][2] + gameBoard[1][2] + gameBoard[2][2] === "XXX") || 
           (gameBoard[0][2] + gameBoard[1][2] + gameBoard[2][2] === "OOO")) {
    columnWinner = true;
  }
  
  else if (counter === 9) {
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