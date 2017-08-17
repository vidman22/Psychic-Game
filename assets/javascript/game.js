var alpha = ["a", "b", "c", "d", "e", "f",
	"g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
 	"u", "v", "w", "x", "y", "z"];

 	
    var lettersGuessed = [];
    var wins = 0;
    var losses = 0;
    var guesses = 10;


    
 	//var computerGuess = alpha[Math.floor(Math.random() * alpha.length)];
 		//console.log(computerGuess);


 	function hangman() {

 	var computerGuess = alpha[Math.floor(Math.random() * alpha.length)];
 		console.log(computerGuess);

 	
 	document.onkeyup = function(event) {
    
     
    	lettersGuessed.push(event.key)


    	var userGuess = event.key;
  
  	

    	  if (userGuess === computerGuess) {
      		wins++, lettersGuessed = [], guesses = 10, hangman();
      		return; 
      		}

    	  if (userGuess !== computerGuess) {
      		guesses--;
     	 	}

   		   if (guesses === 0) {
      		losses++, lettersGuessed = [], guesses = 10, hangman();
      		return;

    	  	}
var html =
      "<p>The computer chose: " + "?" + "</p>" +
          "<p>You chose: " + userGuess + "</p>" +
          "<p>letters guessed: " + lettersGuessed + "</p>" + 
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>guesses: " + guesses + "</p>" ;


        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;

       }
   }
      	

hangman();