// do{
    let UserScore = 0;
    let CpuScore = 0;
    
    const Option = ["rock", "paper", "scissors"];
    
    //code by shahrzad
    function computerChoice() {
        return Option[Math.floor(Math.random() * 3)];
    };

    function playGame(playerChoice) {
        const computer = computerChoice();
        const resultElement = document.querySelector('.result');

        if (playerChoice === computer) {
            resultElement.innerText = "It's a tie!";
        } else if ( 
            (playerChoice === "rock" && computer === "scissors") 
            (playerChoice === "paper" && computer === "rock") 
            (playerChoice === "scissors" && computer === "paper"))
        {
            resultElement.innerText = 'You win! Computer chose'+ computer+'.';
            UserScore++;
        } else {
            resultElement.innerText = 'You lose! Computer chose'+ computer+'.';
            CpuScore++;
        };
    };
    //end of code shahrzad
    console.log('Player : '+ UserScore +' / Rival : '+ CpuScore +'.');  
// }
// while(ContMat == 'True');