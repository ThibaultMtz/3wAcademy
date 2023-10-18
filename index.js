const choices = ["rock", "paper", "scissors"];

function computerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playGame(playerChoice) {
    const computer = computerChoice();
    const resultElement = document.querySelector('.result');

    if (playerChoice === computer) {
        resultElement.innerText = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computer === "scissors") ||
        (playerChoice === "paper" && computer === "rock") ||
        (playerChoice === "scissors" && computer === "paper")
    ) {
        resultElement.innerText = `You win! Computer chose ${computer}.`;
    } else {
        resultElement.innerText = `You lose! Computer chose ${computer}.`;
    }
}

const buttons = document.querySelectorAll('.choice');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        playGame(this.id);
    });
});
