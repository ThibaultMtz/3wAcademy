et UserScore = 0;
let CpuScore = 0;
let rounds = 0; 

const helpButton = document.getElementById('help-button');
const rulesDiv = document.getElementById('rules');

helpButton.addEventListener('click', function() {
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
        UserScore++;
        document.getElementById('player-wins').innerText = UserScore; // Update user's score
        resultElement.className = 'game-result win'; // Set the class to 'win'
    } else {
        resultElement.innerText = 'Computer Wins!';
        CpuScore++;
        document.getElementById('computer-wins').innerText = CpuScore; // Update computer's score
        resultElement.className = 'game-result lose'; // Set the class to 'lose'
    }

    rounds--;

    if (rounds === 0) {
        endGame();
    }
    console.log('Player: ' + UserScore + ' / Rival: ' + CpuScore + '.');
}

const buttons = document.querySelectorAll('.choice');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        playGame(this.id);
    });
});

console.log('Player: ' + UserScore + ' / Rival: ' + CpuScore + '.');
const button = document.querySelector('button')
const nav = document.querySelector('nav')
const backdrop = document.querySelector('.backdrop')

//ouvre le menu
button.addEventListener('click', () => {
    nav.classList.add('open')
})

//enleve le menu et revient sur la page de jeu 
backdrop.addEventListener('click', () => {
    nav.classList.remove('open');
})

const continuer = document.getElementById('continuerBouton');
const recommencer = document.getElementById('recommencerBouton')
const quitter = document.getElementById('quitterBouton')

continuer.addEventListener('click', () => {
    nav.classList.remove('open');
})

//rafraichit la page pour le joueur recommence son jeu 
recommencer.addEventListener('click', () => {
    location.reload();
})

quitter.addEventListener('click', () => {
    //insérer le lien de votre page pour rediriger à l'acceuil du jeu)
    location.href = 'https://google.com'; 
})
