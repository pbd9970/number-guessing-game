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
      if ( isNaN(userInput) ) {
        console.log('Please enter a number.');
        return false;
      } else if (userInput <= 0) {
        console.log('Enter a positive number between 1 and 100');
        return false;
      } else if (userInput > 100) {
        console.log('Enter a positive number that is less that 100, please.');
        return false;
      }
      return true;
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
          console.log('Your number is greater than secret number.');
          console.log("Your number was valid. Thanks for playing!");
          success = "message1";
          return success;
        } else if (userInput < this.secretNumber) {
          console.log('Your number is less than secret number.');
          console.log("Your number was valid. Thanks for playing!");
          success = "message2";
          return success;
        } else if (userInput === this.secretNumber) {
          console.log('Your number the same as the secret number.');
          console.log("Your number was valid. Thanks for playing!");
          // only turn success to true and return it when the user did match the number
          success = true;
          return success;
        } else {
          console.log('There may have been an error with your input');
        }
      } else {
        console.log("Your number was NOT valid. Please try again.");
        success = "error1";
        return success;
      }
      // return false success if nothing matched
      return success;
    };
  };

  window.bl = new BusinessLogic();
})();