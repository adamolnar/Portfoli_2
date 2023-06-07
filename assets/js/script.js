//--------------------BACKGROUND STARS---------------------

// Sets the number of stars  to display
const numStars = 200;

// For every star to display
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

     
//---------------------MODAL BOX-------------------------

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

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

//----------------------------AUDIO--------------------------------------------

// Function to click on icon to play audio
function playAudio(player)
{
   document.getElementById(player).play();
   document.getElementById("pausebutton_" + player).style.display = "";
   document.getElementById("playbutton_" + player).style.display = "none";
   document.getElementById("resetbutton_" + player).style.display = "none";
}
function pauseAudio(player)
{
   document.getElementById(player).pause();
   document.getElementById("playbutton_" + player).style.display = "";
   document.getElementById("pausebutton_" + player).style.display = "none";
   document.getElementById("resetbutton_" + player).style.display = "none";
}
function resetAudio(player)
{
   document.getElementById(player).currentTime = 0;
}

// When the user clicks the button, show the volume down icon 




// ----------------------GAME----------------------

// Counting score 
var playerScore = 0;
var computerScore = 0; 



let userChoice = "";
let computerChoice = "";
let result = [userChoice, computerChoice]

let emojis = ["✂️ ", "📄", "🪨", "🦎", "🖖🏻"];
let currentEmojiNumber = 0;

let shuffleIntervalID = setInterval(shuffleEmojis, 150);

let userChoiceContainer = document.querySelector("#player-choice-container");
let emojiShuffleElement = document.querySelector("#emoji-shuffle");

userChoiceContainer.addEventListener("click", handlePlayerChoice);

// Function to get player choice
function handlePlayerChoice(event) {
  if (!event.target.classList.contains("emoji")) return;
  userChoice = event.target.textContent;
  userChoiceContainer.innerHTML = `<p class="emoji">${userChoice}</p>`;
  clearInterval(shuffleIntervalID);
 determineWinner();
}

// Function to return a random emoji from the dictionary and  genenerate computer choice.
function shuffleEmojis() {
  computerChoice = emojis[currentEmojiNumber];
  emojiShuffleElement.textContent = computerChoice;

  if (currentEmojiNumber < emojis.length - 1) {
      currentEmojiNumber++;
  } else {
      currentEmojiNumber = 0;
  }
}

// Function to start playing game
playGame.forEach(option => {
      option.addEventListener('click',function(){

          let movesLeft = document.querySelector('.movesleft');
          moves++;
          movesLeft.innerText = `Moves Left: ${10-moves}`;
          
          // Calling gameOver function after 10 moves
          if(moves == 10){
              gameOver(playerOptions,movesLeft);
          }
      })
  })
  


// Function to compare user and computer choices and determin game winner.
function determineWinner() {
    let gameResultMessageElement = document.querySelector("#game-result-message");
    let gameResultMessage = "";
    let playerScoreBoard = document.querySelector('.p-count');
    let computerScoreBoard = document.querySelector('.c-count');

    if (userChoice === computerChoice) {
        gameResultMessage = "It's a tie!";
        playerScore +=0;
        playerScoreBoard.textContent = playerScore;
        computerScore +=0;
        computerScoreBoard.textContent = computerScore;
       
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

 
  // Calling the game function
  game();


  // Countdown animation from hyperjump.html

  var slideBox = document.getElementById('count-down');

    setTimeout(function(){
    slideBox.style.display = 'none';
    }, 5000); 









