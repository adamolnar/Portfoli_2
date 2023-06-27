![Screenshot with the name of the game](/assets/images/Screenshot_game_title.png)

### This game is a five-gesture expansion of the classic selection method game rock-paper-scissors. It operates on the same basic principle, but includes two additional weapons: the lizard (formed by the hand as a sock-puppet-like mouth) and Spock (formed by the Star Trek Vulcan salute).
<p>&nbsp;</p>

### By combining timeless game  like Rock, Paper, Scissors with the modern "Bing Bang Theory" twist and classic Star Wars opening crawl with additional Stars Wars Main Theme Audio we bring nostalgia back to live, and this is where the fun beginns.
<p>&nbsp;</p>

### Learn rules, play the game and have fun! This is all it takes for every user to enjoy this game.  
<p>&nbsp;</p>

> “In my experience, there’s no such thing as luck.” —Obi-Wan Kenobi, A New Hope
<p>&nbsp;</p>

![Screenshot of media resposivnes](/assets/images/Screenshot_am_i_responsive.png)
<p>&nbsp;</p>

# Features
## Favicon
- User can identify game tab by visual galaxy element.
<p>&nbsp;</p>

![Favicon](/assets/images/favicon%20(1).png)
<p>&nbsp;</p>

## Intro
- Opening
  - Star Wars inspired opening with game plot explaining story to the user of Galaxy being in jeopardy by evil forces. In order to save the planet Gnies and free the innocent, user must win the Rock, Paper, Scissors, Lizard, Spock game! User has 10 moves after which winner will be determined.

![Screenshot of the game's plot](/assets/images/Screenshot_game_plot.png)
<p>&nbsp;</p>

- "Opening Crawl" 
  - Iconic font from the Star Wars, which is the yellow text with animation of illusion slowly disappearing far in the space. This text explanins to first time game user, who is not familiar with the rules, 5 basic rules and which element beats what in order to win the game. 

- Start button 
  - This button appears at the end of the "openning crawl" and lets user to begin the game by clicking on it.

- Fast Forward 
  - This icon in the left-top corner lets user to skip the intro and move to the game area to begin the play. 

- Audio
  - This icon in the right-top corner lets user, by clicking on it, to play Star Wars Main Theme Audio as a exciting addition for user experience. After clicking on speaker icon, user has options to controle the audio track by controle buttons: volume down, volume up, reset to beggining or stoping the audio from playing. 

![Screenshot of the opening crawl](/assets/images/Screenshot_intro.png)
<p>&nbsp;</p>

## Game Area

- Go Back Icon
  - In the left-top corner this icon, by clicking on it,  allows user to go back to the previus Intro page.

- Player 
  - This container shows to user all emojis available. By clicking on one of the emoji, user emoji is highligted. 

- Computer
  - This container schuffle 5 emojis till the user click on his choice. Once on of the user emoji is picked the schuffle stops and it shows random computer choice. 

![Screenshot of the game.html](/assets/images/Screenshot_game_html.png)
<p>&nbsp;</p>

- Game Result Message 
  - In this container user can see a text with statement which elements wins over which and why.

- Player Score
  - In this area user can see how many points he won.

- Computer Score 
  - In this area user can see how many points computer has.

- Next Round 
  - By clicking on this button user starts new emoji shuffle for the computer choice and generates all 5 emojis in the player container, so user can have his next move.

- Moves Left
  - In this area user can see how many moves is left till end of the game.

![Screenshot of the game after pick](/assets/images/Screenshot_hoover_over.png)
<p>&nbsp;</p>

- Game Rules
  - In the right-top corner, by clicking on it, user has accesss to modal box with cheat sheet of rules to plan better strategy of winning this game.

![Screenshot of modal box](/assets/images/Screenshot_modal_box.png)
<p>&nbsp;</p>

## You won
 - This page is loading after all 10 moves are done and if users score is higher then computer's.
 - Zoom-in animated congartulations text appers to show the user that he has won this battle.
 - Confetti copied from CodePen - a visual bonus effect for the user experience. 
 - Play Again button -  gives the user possibilite to play again. By clicking on it game area is loaded and user can start to play from the beginning. 

![Screenshot you won page](/assets/images/Screenshot_you_won.png)
<p>&nbsp;</p>

## You lost
 - This is a page loading after all 10 moves are done and if users score is lower then computer's. 
 - With the flash red Game Over animation and "You lost!" user has clear visual understanding that this battle is over for him.
 - Play Again button gives the user possibilite to play again. By clicking on it game area is loaded and user can start to play from the beginning. 

![Screenshot you lost page](/assets/images/Screenshot_you_lost.png)
<p>&nbsp;</p>


## Features Left to Implement
- If more time available and more experience with Java Script gained: 
  - I would add Game Over sound from [Pixabay](https://pixabay.com/sound-effects/failure-4-with-gong-69906/) or You Won sound from [Pixabay](https://pixabay.com/sound-effects/success-fanfare-trumpets-6185/). 
  - Explosion animation of the planet written in JS for the lose.html 
  [Explosion animation](https://www.geeksforgeeks.org/explosion-animation-in-canvas/).
  - Confetti animation in win.html not just copied and adjusted to project needs but wriiten by myself [CodePen](https://codepen.io/programking/pen/AJgeEd).
   - Hyperjump and countdwon animation in CSS, between index.html and game.html to create space travel experience for the user [CodePen](https://codepen.io/noahblon/pen/DpNRyR).
   <p>&nbsp;</p>

# Testing 
- I tested playing this game in different browsers: Chrome, Firefox, Safari.
- I confirmed that fast vorward icon, to skip the intro content, work and also go back arrows in game.html take user back to index.html page.
- I confirmed that START button, after Intro with instructions is over, takes user to the game.html. 
- I confirmed that audio controle buttons are working if user whants to play, stop, start from beginning or if sound goes volume up or down.
- I confirmed that the game results are always correct.
- I confirmed that score is updating correctly.
- I confirmed that after 10 moves game is over and user either wins or lose.
- I confirmed that Intro, instructions, options, results and modal box text are all readable and easy to understand.
- I confirm that this project is responsive, looks good and works on all standart screen sizes using the devtools device toolbar.
- I confirm that the colors and fonts chosen are easy to read and are accessible by running it through lighthouse in devtools. 
  <p>&nbsp;</p>

![Screenshot from lighthouse testing](/assets/images/Screenshot_lighthouse.png)
<p>&nbsp;</p>



## Bugs
### Solved Bugs
- When I deployed my project to GitHub Pages i discovered my game was broken, the link to the other files (CSS, JS, images etc.) did not work. I discovered this was beacuse I had absolute file paths such as this in my code. Removing the starting / fixed the problem.

      <link rel="stylesheet" href="css/game.css">
 
- Scissors emoji when chosen by user wasn't showing score and result message.

<!--Options available to player to play game -->
            <div class="choice-container" id="player-choice-container">
                <p class="emoji">🪨</p>
                <p class="emoji">📄</p>
                <p class="emoji">✂️</p>
                <p class="emoji">🦎</p>
                <p class="emoji">🖖🏻</p>
            </div>


- After adding white space directly to scissors emoji in game.html, issue was solved.

<!--Options available to player to play game -->
            <div class="choice-container" id="player-choice-container">
                <p class="emoji">🪨</p>
                <p class="emoji">📄</p>
                <p class="emoji">✂️ </p>
                <p class="emoji">🦎</p>
                <p class="emoji">🖖🏻</p>
            </div>
        </div>

        


### Validator Testing
- HTML
  - No errors were returned when passing through the official W3C validator. 
- CSS
  - No errors were found when passing through the official (Jigsaw) validator.
- JS

### Unfixed Bugs
  <p>&nbsp;</p>

# Deployment
- The site was deplyed to GitHub pages. The steps to deploy are as follow:
  - In the GitHub repository, navigate to the Settings tab.
  - From the source section drop-down menu, select the Master Branch.
  - Once the master branch has ben selected, the page provided the link to the completed website.

  The live link can be found here - [GAME](https://adamolnar.github.io/Portfoli_2/).
  <p>&nbsp;</p>

# Credits
## Content
- The code for the index.html intro was taken from [CodePen](https://codepen.io/christopherkade/pen/rJVPjz).
- The code for modal box with game rules was taken from [W3School](https://www.w3schools.com/howto/howto_css_modals.asp).
- The code for the game was written by following [CodeWizardsHQ](https://www.codewizardshq.com/javascript-tutorial-for-kids-rock-paper-scissors/) tutorial and code from [GeeksForGeeks](https://ide.geeksforgeeks.org/online-html-editor/0dd9e95b-6567-453b-95fb-cb4226616bbf).
- Hoover over  emojis function was taken from [W3School](https://www.w3schools.com/howto/howto_js_active_element.asp)
- Play again button was inspired by [TeamTreeHouse](https://teamtreehouse.com/community/any-one-know-how-to-make-a-restart-button). 
- Audio tag with icon code was inspire by [StackOverflow](https://stackoverflow.com/questions/63740598/how-can-i-use-html-audio-tag-with-icon) and [Tutorial](http://www.nof-tutorials.com/HTML5-Player/Tutorial/tutorial.html).
- Confetti for the win.html was copied from [CodePen](https://codepen.io/programking/pen/AJgeEd).





##  Media 
- Emojis were taken from [Emojipedia](https://emojipedia.org/scissors/).
- Audio was taken from [YouTube](https://www.youtube.com/watch?v=_D0ZQPqeJkk) and converted to mp3 on [OnlyMP3](https://en.onlymp3.to/259/).
- Game favicon was copied from [TheNounProject](https://thenounproject.com/icon/galaxy-1081168/).


