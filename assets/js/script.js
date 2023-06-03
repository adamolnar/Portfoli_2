// Sets the number of stars  to display
const numStars = 200;

// For every star  to display
for (let i = 0; i < numStars; i++) {
  let star = document.createElement("div");  
  star.className = "star";
  let xy = getRandomPosition();
    star.style.top = xy[0] + 'px';
    star.style.left = xy[1] + 'px';
  document.body.append(star);
}

// Gets random x, y values based on the size of the container
function getRandomPosition() {  
  let y = window.innerWidth;
  let x = window.innerHeight;
    let randomX = Math.floor(Math.random()*x);
    let randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];
}




// GAME

// Counting score function
var playerScore = 0;
var computerScore = 0; 



let userChoice = "";
let computerChoice = "";
let result = ""

let emojis = ["✂️ ", "📄", "🪨", "🦎", "🖖🏻"];
let currentEmojiNumber = 0;

let shuffleIntervalID = setInterval(shuffleEmojis, 150);

let userChoiceContainer = document.querySelector("#player-choice-container");
let emojiShuffleElement = document.querySelector("#emoji-shuffle");

userChoiceContainer.addEventListener("click", handlePlayerChoice);


function handlePlayerChoice(event) {
  if (!event.target.classList.contains("emoji")) return;
 userChoice = event.target.textContent;
 userChoiceContainer.innerHTML = `<p class="emoji">${userChoice}</p>`;
  clearInterval(shuffleIntervalID);
  playGame();
}

// Function to return a random emoji from the dictiopnary.

function shuffleEmojis() {
  computerChoice = emojis[currentEmojiNumber];
  emojiShuffleElement.textContent = computerChoice;

  if (currentEmojiNumber < emojis.length - 1) {
      currentEmojiNumber++;
  } else {
      currentEmojiNumber = 0;
  }
}



// Function to compare user and computer choices and determin game winner.

function playGame() {
    let gameResultMessageElement = document.querySelector("#game-result-message");
    let gameResultMessage = "";
    let playerScoreBoard = document.querySelector('.p-count');
    let computerScoreBoard = document.querySelector('.c-count');

    if (userChoice === computerChoice) {
        gameResultMessage = "It's a tie!";
       
    } else if (userChoice === "🪨" && computerChoice === "✂️") {
        gameResultMessage = 'Rock crushes scissors. You win !';
        playerScore +=1;
        playerScoreBoard.textContent = playerScore;
    } else if (userChoice === "✂️" && computerChoice === "🪨") {
        gameResultMessage = 'Rock crushes scissors ! You lose';
        computerScore +=1;
        computerScoreBoard.textContent = computerScore;
    
    } else if (userChoice === "📄" && computerChoice === "🪨") {
        gameResultMessage = 'Paper covers rock. You win !';
        playerScore +=1;
        playerScoreBoard.textContent = playerScore;
    } else if (userChoice === "🪨" && computerChoice === "📄") {
        gameResultMessage = 'Paper covers rock ! You lose';
        computerScore +=1;
        computerScoreBoard.textContent = computerScore;

    } else if (userChoice === "✂️" && computerChoice === "📄") {
        gameResultMessage =  'Scissors cut paper. You win !';
        playerScore +=1;
        playerScoreBoard.textContent = playerScore;
    } else if (userChoice === "📄" && computerChoice === "✂️") {
        gameResultMessage =  'Scissors cut paper ! You lose';
        computerScore +=1;
        computerScoreBoard.textContent = computerScore;

    }else if (userChoice === "🦎" && computerChoice === "📄") {
          gameResultMessage = 'Lizard eats paper. You win !'; 
          playerScore +=1;
          playerScoreBoard.textContent = playerScore;
    }else if (userChoice === "📄" && computerChoice === "🦎") {
          gameResultMessage = 'Lizard eats paper ! You lose'; 
          computerScore +=1; 
          computerScoreBoard.textContent = computerScore;

    }else if (userChoice === "✂️" && computerChoice === "🦎") {
          gameResultMessage = 'Scissors decapitate lizard. You win !'; 
          playerScore +=1;
          playerScoreBoard.textContent = playerScore;
    }else if (userChoice === "🦎" && computerChoice === "✂️") {
          gameResultMessage = 'Scissors decapitate lizard! You lose'; 
          computerScore +=1; 
          computerScoreBoard.textContent = computerScore;

    }else if (userChoice === "🪨" && computerChoice === "🦎") {
          gameResultMessage = 'Rock crushes lizard. You win !';
          playerScore +=1;
          playerScoreBoard.textContent = playerScore;
    }else if (userChoice === "🦎" && computerChoice === "🪨") {
          gameResultMessage = 'Rock crushes lizard ! You lose';
          computerScore +=1;  
          computerScoreBoard.textContent = computerScore;

    }else if (userChoice === "🖖🏻" && computerChoice === "🪨") {
          gameResultMessage ='Spock vaporizes rock. You win !';
          playerScore +=1;
          playerScoreBoard.textContent = playerScore;
    }else if (userChoice === "🪨" && computerChoice === "🖖🏻") {
          gameResultMessage ='Spock vaporizes rock ! You lose';  
          computerScore +=1;
          computerScoreBoard.textContent = computerScore;

    }else if (userChoice === "📄" && computerChoice === "🖖🏻") {
          gameResultMessage =  'Paper disproves Spock. You win !';
          playerScore +=1;
          playerScoreBoard.textContent = playerScore;
    }else if (userChoice === "🖖🏻" && computerChoice === "📄") {
          gameResultMessage =  'Paper disproves Spock ! You lose';
          computerScore +=1;  
          computerScoreBoard.textContent = computerScore;

    }else if (userChoice === "🖖🏻" && computerChoice === "✂️") {
          gameResultMessage = 'Spock crushes scissors. You win !';
          playerScore +=1;
          playerScoreBoard.textContent = playerScore;
    }else if (userChoice === "✂️" && computerChoice === "🖖🏻") {
          gameResultMessage = 'Spock crushes scissors ! You lose'; 
          computerScore +=1; 
          computerScoreBoard.textContent = computerScore;

    }else if (userChoice === "🦎" && computerChoice === "🖖🏻") {
          gameResultMessage = 'Lizard poisons Spock. You win !'; 
          playerScore +=1;
          playerScoreBoard.textContent = playerScore;
    }else if (userChoice === "🖖🏻" && computerChoice === "🦎") {
          gameResultMessage =  'Lizard poisons Spock ! You lose'; 
          computerScore +=1;
          computerScoreBoard.textContent = computerScore;
    } 

    gameResultMessageElement.textContent = gameResultMessage;
}



// Button to  play again
document.querySelector('.newGame').addEventListener('click', function(){
  window.location.reload();
  return false;
});












