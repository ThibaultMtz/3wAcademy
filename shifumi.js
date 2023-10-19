const menuPause = document.getElementById('pauseMenu');
const continuerButton = document.getElementById('resumeGame');
const recommencerButton = document.getElementById('restartGame');
const quitterButton = document.getElementById('quitGame');
const pauseButton = document.getElementById('pauseButton')

function afficherMenuPause() {
    menuPause.style.display = 'block';
}

function cacherMenuPause() {
    menuPause.style.display = 'none';
}

pauseButton.addEventListener('click', afficherMenuPause)
continuerButton.addEventListener('click', cacherMenuPause);
recommencerButton.addEventListener('click', createRestartButton);
quitterButton.addEventListener('click', quitterJeu);


function createRestartButton() {
    // Crée un bouton de redémarrage
    let restartButton = document.getElementById("restartGame");

    restartButton.addEventListener("click", function()  {
       if(recommencerButton.textContent.trim() === 'recommencerButton') {
        window.location.reload()
    };

    // Ajoute le bouton à votre page HTML (par exemple, à un élément div avec l'ID "gameContainer")
    let gameReset = document.getElementById("restartGame"); 
    gameReset.appendChild(restartButton);
})
}

