var Word = require("./word.js");
var inquirer = require("inquirer");
var newWord;
var correct = [];
var guessedArr = [];
//counter
var i = 0;
var guessesLeft = 8;
//word array
var word_arr = ["Moana", "Zootopia", "Sing", "Trolls"];

var randomWord = function() {
  i = 0;
  var randomNumber = Math.floor(Math.random() * word_arr.length);
  //console.log("randomNumber===" + randomNumber);
  pickedword = word_arr[randomNumber].toLowerCase();
  //console.log("pickedword Word:  " + pickedword);
  newWord = new Word(pickedword);
  //console.log("newWord===" + newWord);
  guessedArr = [];
  startGame();
};

function startGame() {
  var guessedWord = newWord.toString();
  console.log("\nGuessed Word  " + guessedWord);
  //console.log("pickedword  " + pickedword);
  console.log("\nGuesses remaining:  " + (guessesLeft - i));

  if (i < guessesLeft && guessedWord != pickedword.toLowerCase()) {
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
        if (guessedArr.indexOf(response.guess) === -1) {
          guessedArr.push(response.guess);
          console.log("\n\nGuessed letters " + guessedArr);
          newWord.userGuess(response.guess);
          //startGame();
        } else {
          console.log("Already guessed");
        }
        //guessedArr.push(response.guess);
        //console.log("\n Guessed Letters " + guessedArr);
        //newWord.userGuess(response.guess);
        startGame();
      });
  } else if (guessedWord === pickedword) {
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
        if (response.PlayAgain) randomWord();
        else console.log("Thank You!!!Plese visit again!!");
      });
  }
}
randomWord();
