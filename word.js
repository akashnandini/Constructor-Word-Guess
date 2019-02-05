var Letter = require("./letter.js");
var Word = function(randomWord) {
  this.letterArray = [];
  this.randomWord = randomWord;

  for (var i = 0; i < randomWord.length; i++) {
    this.letterArray.push(new Letter(this.randomWord[i]));
  }

  //display the data in the terminal

  this.toString = function() {
    answerLog = "";
    for (var i = 0; i < this.letterArray.length; i++) {
      answerLog = answerLog + this.letterArray[i].to_response_String();
    }
    //console.log("answerLog===" + answerLog);
    return answerLog;
  };

  this.userGuess = function(input) {
    for (var i = 0; i < this.letterArray.length; i++) {
      this.letterArray[i].check(input);
    }
  };
};
module.exports = Word;
