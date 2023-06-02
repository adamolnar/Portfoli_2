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




// GAME



var playerChoice = "";
var computerChoice = "";

var emojis = ["✂️ ", "📄", "🪨", "🦎", "🖖🏻"];
var currentEmojiNumber = 0;

var shuffleIntervalID = setInterval(shuffleEmojis, 150);

var playerChoiceContainer = document.querySelector("#player-choice-container");
var emojiShuffleElement = document.querySelector("#emoji-shuffle");

playerChoiceContainer.addEventListener("click", handlePlayerChoice);

function determineGameWinner() {
    var gameResultMessageElement = document.querySelector("#game-result-message");
    var gameResultMessage = "";

    if (playerChoice === computerChoice) {
        gameResultMessage = "It's a tie!";
    } else if (playerChoice === "🪨" && computerChoice === "✂️ ") {
        gameResultMessage = "Player wins!";
    } else if (playerChoice === "📄" && computerChoice === "🪨") {
        gameResultMessage = "Player wins!";
    } else if (playerChoice === "✂️ " && computerChoice === "📄") {
        gameResultMessage = "Player wins!";
    }else if (playerChoice === "🦎" && computerChoice === "📄") {
          gameResultMessage = "Player wins!";  
    }else if (playerChoice === "✂️ " && computerChoice === "🦎") {
          gameResultMessage = "Player wins!";  
    }else if (playerChoice === "🪨" && computerChoice === "🦎") {
          gameResultMessage = "Player wins!"; 
    }else if (playerChoice === "🖖🏻" && computerChoice === "🪨") {
          gameResultMessage = "Player wins!"; 
    }else if (playerChoice === "📄" && computerChoice === "🖖🏻") {
          gameResultMessage = "Player wins!"; 
    }else if (playerChoice === "🖖🏻" && computerChoice === "✂️ ") {
          gameResultMessage = "Player wins!"; 
    }else if (playerChoice === "🦎" && computerChoice === "🖖🏻") {
          gameResultMessage = "Player wins!";        
    } else {
        gameResultMessage = "Computer wins!";
    }

    gameResultMessageElement.textContent = gameResultMessage + " Refresh to play again!";
}

function handlePlayerChoice(event) {
    if (!event.target.classList.contains("emoji")) return;
    playerChoice = event.target.textContent;
    playerChoiceContainer.innerHTML = `<p class="emoji">${playerChoice}</p>`;
    clearInterval(shuffleIntervalID);
    determineGameWinner();
}

function shuffleEmojis() {
    computerChoice = emojis[currentEmojiNumber];
    emojiShuffleElement.textContent = computerChoice;

    if (currentEmojiNumber < emojis.length - 1) {
        currentEmojiNumber++;
    } else {
        currentEmojiNumber = 0;
    }
}

/* A variable to store chosen input
var userChoice = "";
var computerChoice = "";
var result = "";

var userChoiceDisplay = document.getElementById("user-choice");
var computerChoiceDisplay = document.getElementById("computer-choice");
var resultDisplay = document.getElementById("result");
var possibleChoices = document.querySelector(".choice");



userChoiceDisplay.addEventListener("click", handleUserChoice);

function handleUserChoice(event) {
  if (!event.target.classList.contains('choice')) return;

  userChoice = event.target.textContent;
  userChoiceDisplay.innerHTML = `<p class="choice">${userChoice}</p>`;
}
``














possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))*/

// Function to return a random number in range 1 to 5 for a computer choice.

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 5) + 1 
  
  if (randomNumber === 1) {
    computerChoice = "🪨"
  }
  if (randomNumber === 2) {
    computerChoice = "✂️ "
  }
  if (randomNumber === 3) {
    computerChoice =  "📄"
  }
  if (randomNumber === 4) {
    computerChoice = "🦎"
  }
  if (randomNumber === 5) {
    computerChoice = "🖖🏻"
  }
  computerChoiceDisplay.innerHTML = computerChoice
}




// Function to compare user and computer choices and display text

function getResult() {
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
  resultDisplay.innerHTML = result
}; */






