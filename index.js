var Word = require("./word.js");
var inquirer = require("inquirer");
var newWord;
//counter
var i = 0;
var guessesLeft = 8;
//word array
var word_arr = ["Moana", "Zootopia", "Sing", "Trolls"];

var randomWord = function() {
  i = 0;
  var randomNumber = Math.floor(Math.random() * word_arr.length);
  console.log("randomNumber===" + randomNumber);
  pickedword = word_arr[randomNumber].toLowerCase();
  //console.log("pickedword Word:  " + pickedword);
  newWord = new Word(pickedword);
  console.log("newWord===" + newWord);
  startGame();
};

function startGame() {
  var comparisonWord = newWord.toString();
  console.log("comparison  " + comparisonWord);
  console.log("pickedword  " + pickedword);
  console.log("Guesses remaining:  " + (-i + 8));

  if (i < guessesLeft && comparisonWord != pickedword.toLowerCase()) {
    i++;
    inquirer
      .prompt([
        {
          name: "guess",
          type: "input",
          message: "Enter your guess.."
        }
      ])
      .then(function(response) {
        newWord.userGuess(response.guess);
        startGame();
      });
  } else if (comparisonWord === pickedword) {
    console.log("Correct Answer!");
    inquirer
      .prompt([
        {
          name: "PlayAgain",
          type: "confirm",
          message: "Do you want to play again?"
        }
      ])
      .then(function(response) {
        if (response.PlayAgain) randomWord();
      });
  } else if (guessesLeft === 8) {
    console.log("Wrong Answer!");
    inquirer
      .prompt([
        {
          name: "PlayAgain",
          type: "confirm",
          message: "Do you want to play again?"
        }
      ])
      .then(function(response) {
        if (!response.PlayAgain) console.log("Plese visit again!!");
      });
  }
}
randomWord();
