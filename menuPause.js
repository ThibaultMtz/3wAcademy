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
   location.reload
})

quitter.addEventListener('click', () => {
    //insérer le lien de votre page pour rediriger à l'acceuil du jeu)
    location.href = ''
})
