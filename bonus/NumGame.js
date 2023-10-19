const Answer = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
// const alphabet = ["A","a","B","b","C","c","D","d","E","e","F","f","G","g","H","h","I","i","J","j","K","k","L","l","M","m","N","n","O","o","P","p","Q","q","R","r","S","s","T","t","U","u","V","v","W","w","X","x","Y","y","Z","z"];
const n = Answer.length;
function cpuChoice() {
	return Answer[Math.floor(Math.random() * n)];
};
t = 10
var Goal = false;
function Guess(){
	const com = cpuChoice();
	// const resultElement = document.querySelector('.result');
	for (var i = 0; i <= t; i++){
		UserAnswer();
		if (inputV === com){
			Goal = true;
		}
		else {
			if (inputV > com){
				Calc();
			};
		};
		LimitCounter()
	};
	if (i => t && Goal != true){
		GameOver();
	} else{
		WinGuess();
	};
};

function LimitCounter(){
	// const L = document.getElementById('turns');
	if (i < t){
		console.log('Turns left: '+i+'.');
        //L.innerText = 'Turns left: '+i+'.';
	}else{
		console.log('Last chance!');
        //L.innerText = 'Last chance!';
	};
}

function GameOver(){
	//alert("Game Over! CPU wins.");
	console.log("Game Over! CPU wins.");
	//alert("CPU chose "+com+".");
	console.log("CPU chose "+com+".");
}

function WinGuess(){
	//alert("Congratulations! You win");
	console.log("Congratulations! You win");
	//alert("CPU chose "+com+".");
	console.log("CPU chose "+com+".");
	if (i === 0){
		alert("And on the 1st try, Impressive.");
		//console.log("And on the 1st try, Impressive.");
	}else{
		alert("It took "+i+" tries.");
		// console.log("It took "+i+" tries.");
	}
}

function Calc(){
	UserAnswer();
	let calDif = com - find(Answer[inputV.value])
	switch (calDif){
		case "higher":
			if (calc <= 5 && calc >= 0){
				console.log("warm");
				//alert("warm");
			}else if (calc > 5 && calc <= 15){
				console.log("chilly");
				//alert("chilly");
			}else if (calc > 15 && calc <= 25){
				console.log("cold");
				//alert("cold");
			}else {
				console.log("artic");
				//alert("artic");
			};
		default:
			if (calc >= -5 && calc < 0){
				console.log("warm");
				// alert("warm");
			}else if (calc < -5 && calc >= -15){
				console.log("chilly");
				// alert("chilly");
			}else if (calc < -15 && calc >= -25){
				console.log("cold");
				// alert("cold");
			}else {
				console.log("artic");
				// alert("artic");
			};
	};
};

function UserAnswer(){
	let inputV = document.querySelector("input[type ='answer']");
	const form = document.querySelector("form");
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		addMessage(inputV.value);
		if(inputV.includes() != true ) {
            inputV.value = "";
        }else{
            alert("the response can only include numbers");
        };
    });
};