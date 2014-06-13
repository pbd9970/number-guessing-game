(function() {
  var BusinessLogic = function() {
    // =====================================
    //         Application Logic
    // =====================================
    //
    // this is basically the game's state
    this.gameOver = true;
    // this is used through out this script - @todo: might be able to take off window 
    // made this global to this function wrapper so two event handlers can user it
    this.secretNumber;
    
    // this is a helper function to validate the user input
    this.validateInputForConstraints = function(userInput) {
      if ( isNaN(userInput) || userInput <= 0 || userInput > 100) {
        return false;
      } else {
        return true;
      }
    };

    // this is main number evaluator that checks the user input against the secret number
    // to see if ti is greater less or equal to the result
    // it has some error handling for the input
    this.numberEvaluator = function(userInput) {
      // get user input number and make sure its a number that fits what we asked for
      var valid = this.validateInputForConstraints(userInput);
      // start with success false
      var success = false;
      if (valid) {
        if (userInput > this.secretNumber) {
          return "message1";
        } else if (userInput < this.secretNumber) {
          return "message2";
        } else if (userInput === this.secretNumber) {
          return true;
        } else {
          // how could we test this?
          console.log('There may have been an error with your input');
        }
      } else {
        return "error1";
      }
      // return false success if nothing matched
      // how could we test this?
      return success;
    };
  };

  window.bl = new BusinessLogic();
})();