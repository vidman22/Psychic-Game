// Array of alphabet
var alpha = ["a", "b", "c", "d", "e", "f",
	"g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
 	"u", "v", "w", "x", "y", "z"];

 	
// global score variables
var wins = 0;
var losses = 0;

// game function
function psychic() {

  var guesses = 10;
  var lettersGuessed = [];
 	var computerGuess = alpha[Math.floor(Math.random() * alpha.length)];
 		console.log(computerGuess);

   


 	
 	document.onkeyup = function(event) {
    
     
    	lettersGuessed.push(event.key)

    	var userGuess = event.key;

     var html =
      "<p>Guess what letter I'm thinking of</p>" +
          "<p>You chose: " + userGuess + "</p>" +
          "<p>letters guessed: " + lettersGuessed + "</p>" + 
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>guesses: " + guesses + "</p>" ;
        document.querySelector("#game").innerHTML = html; 
  	

    	  if (userGuess === computerGuess) {
      		psychic(), wins++;
      		;
      		} else  if (userGuess !== computerGuess) {
          guesses--;
        }
    	 
        // Resets the game if guesses run out
   		   if (guesses === 0) {
      		psychic(), losses++;
      		;

    	  	}

         

       }
   }
      	

psychic();