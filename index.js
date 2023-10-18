

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
const helpButton = document.getElementById('help-button');

helpButton.addEventListener('click', function() {
    const rules = "Welcome to the Rock, Paper, Scissors game! Here are the rules:\n\n" +
        "- Rock beats Scissors.\n" +
        "- Paper beats Rock.\n" +
        "- Scissors beats Paper.\n" +
        "- If both you and the computer choose the same, it's a tie!\n\n" +
        "How to play:\n\n" +
        "1. Click one of the buttons to choose your move.\n" +
        "2. The computer will randomly choose its move.\n" +
        "3. See the result: You Win, Computer Wins, or It's a tie!\n\n" +
        "Have fun and enjoy the game!";
    
    alert(rules);
});
