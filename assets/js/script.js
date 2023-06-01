// Sets the number of stars  to display
const numStars = 200;

// For every star  to display
for (let i = 0; i < numStars; i++) {
  let star = document.createElement("div");  
  star.className = "star";
  var xy = getRandomPosition();
    star.style.top = xy[0] + 'px';
    star.style.left = xy[1] + 'px';
  document.body.append(star);
}

// Gets random x, y values based on the size of the container
function getRandomPosition() {  
  var y = window.innerWidth;
  var x = window.innerHeight;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];
}

// Function to return a random number in range 1 to 5 for a computer choice.

function getComputerChoice() {
  return Math.floor((Math.random() * 5) + 1);
}

// A Variable to store user input
let userChoice = '';
let computerChoice = '';

// Function to compare user and computer choices and siplay text

function compare(computerChoice) {
  if (userChoice === computerChoice) {
    return 'You have a tie! Go again!'  
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Paper covers rock. You lose!'
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'Paper covers rock. You won!'
    }
  } else if (userChoice === 'scissors') {
    if (computerCHoice === 'rock') {
      return 'Rock crushes scissors! You lose'
    }
  } else if (userChoice === 'rock') {
    if (computerCHoice === 'scissors') {
      return 'Rock crushes scissors! You won'
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Scissors cut paper. You lose!'
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'Scissors cut paper. You won!'
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'lizard') {
      return 'Lizard eats paper. You lose!'
    }
  } else if (userChoice === 'lizard') {
    if (computerChoice === 'paper') {
      return 'Lizard eats paper. You won!'
    }
  } else if (userChoice === 'lizard') {
    if (computerChoice === 'scissors') {
      return 'Scissors decapitate lizard. You lose!'
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'lizard') {
      return 'Scissors decapitate lizard. You won!'
    }
  } else if (userChoice === 'lizard') {
    if (computerChoice === 'rock') {
      return 'Rock crushes lizard. You lose!'
    }
  } else if (userChoice === 'rock') {
    if (computerChoice === 'lizard') {
      return 'Rock crushes lizard. You won!'
    }
  } else if (userChoice === 'rock') {
    if (computerChoice === 'spock') {
      return 'Spock vaporizes rock. You lose!'
    }
  } else if (userChoice === 'spock') {
    if (computerChoice === 'rock') {
      return 'Spock vaporizes rock. You won!'
    }
  } else if (userChoice === 'spock') {
    if (computerChoice === 'paper') {
      return 'Paper disproves Spock. You lose!'
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'spock') {
      return  'Paper disproves Spock. You won!'
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'spock') {
      return 'Spock crushes scissors. You lose!'
    }
  } else if (userChoice === 'spock') {
    if (computerChoice === 'scissors') {
      return 'Spock crushes scissors. You won!'
    }
  } else if (userChoice === 'spock') {
    if (computerChoice === 'lizard') {
      return 'Lizard poisons Spock. You lose!'
    }
  } else if (userChoice === 'lizard') {
    if (computerChoice === 'spock') {
      return 'Lizard poisons Spock. You won!'
    }
  }
};

















// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}