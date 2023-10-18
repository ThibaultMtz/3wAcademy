const menuPause = document.getElementById('menuPause');
const continuerButton = document.getElementById('continuerButton');
const recommencerButton = document.getElementById('recommencerButton');
const quitterButton = document.getElementById('quitterButton');

function afficherMenuPause() {
    menuPause.style.display = 'block';
}

function cacherMenuPause() {
    menuPause.style.display = 'none';
}

continuerButton.addEventListener('click', cacherMenuPause);
recommencerButton.addEventListener('click', recommencerJeu);
quitterButton.addEventListener('click', quitterJeu);

function recommencerJeu() {
   if(recommencerButton.textContent.trim() === 'recommencerButton') {
        window.location.reload();
   }
}