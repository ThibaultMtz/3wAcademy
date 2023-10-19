const helpButton = document.getElementById('help-button');
const rulesDiv = document.getElementById('rules');

helpButton.addEventListener('click', function() {
    // Toggle the display of the rules div
    if (rulesDiv.style.display === "none") {
        rulesDiv.style.display = "block";
    } else {
        rulesDiv.style.display = "none";
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
        (playerChoice === "rock" && computer === "scissors") ||
        (playerChoice === "paper" && computer === "rock") ||
        (playerChoice === "scissors" && computer === "paper")
    ) {
        resultElement.innerText = "You Win!";
        resultElement.className = 'game-result win'; // Set the class to 'win'
    } else {
        resultElement.innerText = "Computer Wins!";
        resultElement.className = 'game-result lose'; // Set the class to 'lose'
    }
}

const buttons = document.querySelectorAll('.choice');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        playGame(this.id);
    });
});
