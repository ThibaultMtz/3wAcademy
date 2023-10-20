let userScore = 0;
let cpuScore = 0;
let rounds = 5; // Number of rounds

const helpButton = document.getElementById('help-button');
const rulesDiv = document.getElementById('rules');

helpButton.addEventListener('click', function () {
    // Toggle the display of the rules div
    if (rulesDiv.style.display === 'none') {
        rulesDiv.style.display = 'block';
    } else {
        rulesDiv.style.display = 'none';
    }
});

const choices = ["rock", "paper", "scissors"];

const choiceImages = {
    rock: 'rock.png',
    paper: 'paper.png',
    scissors: 'scissors.png',
};

function computerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function resetGame() {
    const userChoiceImage = document.getElementById('user-choice-img');
    const computerChoiceImage = document.getElementById('computer-choice-img');
    const resultElement = document.querySelector('.game-result');

    // Reset the images and text
    userChoiceImage.src = '';
    computerChoiceImage.src = '';
    resultElement.innerText = '';
    resultElement.className = 'game-result'; // Reset the class
}

function playGame(playerChoice) {
    resetGame(); // Reset the game at the beginning of each round

    const computer = computerChoice();
    const userChoiceImage = document.getElementById('user-choice-img');
    const computerChoiceImage = document.getElementById('computer-choice-img');
    const resultElement = document.querySelector('.game-result');

    // Set the src attribute of the image elements based on the choices
    userChoiceImage.src = choiceImages[playerChoice];
    computerChoiceImage.src = choiceImages[computer];

    if (playerChoice === computer) {
        resultElement.innerText = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computer === 'scissors') ||
        (playerChoice === 'paper' && computer === 'rock') ||
        (playerChoice === 'scissors' && computer === 'paper')
    ) {
        resultElement.innerText = 'You Win!';
        userScore++;
        document.getElementById('player-wins').innerText = userScore; // Update user's score
        resultElement.className = 'game-result win'; // Set the class to 'win'
    } else {
        resultElement.innerText = 'Computer Wins!';
        cpuScore++;
        document.getElementById('computer-wins').innerText = cpuScore; // Update computer's score
        resultElement.className = 'game-result lose'; // Set the class to 'lose'
    }

    rounds--;

    if (rounds === 0) {
        endGame();
    }
}

function endGame() {
    let gameResultMessage = "";
    if (userScore > cpuScore) {
        gameResultMessage = "You win!";
    } else {
        gameResultMessage = "Game over!";
    }

    setTimeout(function () {
        if (confirm(gameResultMessage + " Do you want to continue the game?")) {
            // User clicked "OK" (yes), so reset the scores and continue.
            userScore = 0;
            cpuScore = 0;
            document.getElementById('player-wins').innerText = userScore;
            document.getElementById('computer-wins').innerText = cpuScore;
            rounds = 5;
        } else {
            // User clicked "Cancel" (no), so quit the game.
            location.reload(); // Reload the page to start a new game.
        }
    }, 100); // Delay the alert for a better user experience.
}

const buttons = document.querySelectorAll('.choice');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        playGame(this.id);
    });
});

const button = document.querySelector('button')
const nav = document.querySelector('nav')
const backdrop = document.querySelector('.backdrop')

// Opens the menu
button.addEventListener('click', () => {
    nav.classList.add('open')
})

// Closes the menu and returns to the game page
backdrop.addEventListener('click', () => {
    nav.classList.remove('open');
})

const continuer = document.getElementById('continuerBouton');
const recommencer = document.getElementById('recommencerBouton')
const quitter = document.getElementById('quitterBouton')

continuer.addEventListener('click', () => {
    nav.classList.remove('open');
})

// Refreshes the page for the player to start a new game
recommencer.addEventListener('click', () => {
    location.reload();
})

quitter.addEventListener('click', () => {
    // Redirect to your desired page to quit the game
    location.href = 'https://google.com'; 
})
