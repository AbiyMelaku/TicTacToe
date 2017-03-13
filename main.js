var prompt = require("prompt-sync").prompt;


/*-- Initializing some variables --*/
//board variables
var columnWinner = false;
var diagonalWinner = false;
var rowWinner = false;

//game variables
var bigCounter = 0;
var counter = 0;
//var currentMove = null;
var goodMove = false;
var noWinner = false
var winner = false;
var repeatPlay = false;

//player variables
var currentPlayer = null;
var player1 = null;
var player2 = null;
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
  console.log("                                         ");
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

// function to print game board for players to see
var printBoard = function() {
  console.log("                                         ");
  console.log("          1   2   3  ");
  console.log("        ~~~~~~~~~~~~~");
  console.log("      1 | " + gameBoard[0][0] + " | " + gameBoard[0][1] + " | " + gameBoard[0][2] + " |");
  console.log("        ~~~~~~~~~~~~~");
  console.log("      2 | " + gameBoard[1][0] + " | " + gameBoard[1][1] + " | " + gameBoard[1][2] + " |");
  console.log("        ~~~~~~~~~~~~~");
  console.log("      3 | " + gameBoard[2][0] + " | " + gameBoard[2][1] + " | " + gameBoard[2][2] + " |");
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

var playAgain = function() {
  if (winner !== false || noWinner !== false) {
    console.log("Would you like to play again? [y or n]");
    playAgain = prompt().toLowerCase();
  }
  if (playAgain === "n" || playAgain === "no") {
    console.log("");
    console.log("Deuces.");
    repeatPlay = false;
  }
  else if (playAgain === "y" || playAgain === "yes") {
    console.log("");
    console.log("Excellent. Round " + bigCounter + " coming up!");
    repeatPlay = true;
  } else {
    console.log("");
    console.log("Ciao");
    repeatPlay = false;
  }
};


// Prepare the players for this experience
console.log("");
console.log("Let's play Tic-Tac-Toe!!! YEEAAAHAHAHAHA");
console.log("");

do {
  console.log("Player 1: Enter your name!");
  var player1 = prompt();

  console.log("Player 2: Enter your name!");
  var player2 = prompt();

  if (player1 === player2) {
    console.log("Please enter different names");
  }

} while (player1 === player2);

console.log("- - - - - - - - - - - - - - - - - - - - - - -");
console.log("");

// directions for play
console.log("Player 1 is X");
console.log("Player 2 is O");
console.log("Player 1 goes first.");
console.log("");

console.log("Tell me your desired position by column then row.");
console.log("For example, entering \"1 2\" will make your mark in the 1st column & 2nd row.");
console.log("");
console.log("Any player can type the word forfeit to stop game.");
console.log("");

//Repeat until we have a winner!
bigBody:
do {
  bigCounter++;
  
  body:
  do {
    counter++;
    
    if (counter === 1) {
      blankBoard();
      //GAME BEGINS!!
      currentPlayer = player1;
      console.log(player1 + ", you're up first!");
    }
    
    //loop to check validity of input
    while (goodMove !== true && giveUp !== true) {
      askMove();
      if (giveUp === true) {
        break body;
      }
      validMove();
    }
    
    // Store the player 1 move in an array
    var move = currentMove.split(" ");
    
    // Change values of array to integer
    move[0] = parseInt(move[0],10);
    move[1] = parseInt(move[1],10);
    
    // Store the current player's move on gameBoard
    if (currentPlayer === player1) {
      gameBoard[move[1]-1][move[0]-1] = "X";
    }
    else {
      gameBoard[move[1]-1][move[0]-1] = "O";
    }
    
    // print game board each turn
    printBoard();

    // Search for possible winner
    checkWinner();

    //announce winner if checkWinner is working
    congrats();
    
    // switch players at end of turn or end game if board is full
    if (currentPlayer === player1 && winner !== true) {
      console.log(player2 + "\'s turn");
      currentPlayer = player2;
      goodMove = false;
    } else if (winner !== true) {
      console.log(player1 + "\'s turn");
      currentPlayer = player1;
      goodMove = false;
    }
    
   } while (winner !== true && noWinner !== true && giveUp !== true); // end of while loop that runs until winner equals true

    playAgain();

    if (repeatPlay === true) {
        resetGame();
    } else {
      break bigBody;
    }
} while (repeatPlay === true);