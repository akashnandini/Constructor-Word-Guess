var inquirer = require("inquirer");

// constructor function used to create letter objects
function Letter(letter) {
  var guessedArr = [];
  this.letter = letter.toLowerCase();
  this.guessed = false;
  //A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
  this.to_response_String = function() {
    if (this.guessed === true) {
      return this.letter;
    } else {
      return "_";
    }
  };

  //A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
  this.check = function(guessLetter) {
    if (guessLetter.toLowerCase() === this.letter) {
      this.guessed = true;
    }
  };
}

module.exports = Letter;
