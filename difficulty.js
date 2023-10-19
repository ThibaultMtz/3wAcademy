/*
<html> 
<script type="text/javascript" src="choice.js"></script>   
<head>  
<title> select limit</title>  
</head>  
<body>  
<h3> How long do you like to play for?</h3>  
<p> Click the following text to see the effect. </p>  
<p id = "#3"> Best of 3 </p>  
<p id = "#5"> Best of 5 </p>  
<p id = "#7"> Best of 7 </p>  
<p id = "#9"> Best of 9 </p> 
<p id = "#inf"> Endless </p>   
<script>  
document.getElementById("#inf").onclick = function() { E() };
*/
let i = 0;
// switch case of turns
switch (id) {
    case "#3":
        B3();
        break;
    case "#5":
        B5()
        break;
    case "#7":
        B7()
        break;
	case "#9":
        B9()
        break;
    default:
        E();
        break;
};
//best of 3
function B3(){
    Match();
    for (i = 0; i < 3; i++) {
        reMatchY();
    } 
    if (i == 3)  {
        reMatchN();
    }; 
};
//best of 5
function B5(){
    Match();
    for (i = 0;i > j; i++){
        reMatchY();
    } 
    if (i == 5)  {
        reMatchN();
    }; 
};
// best of 7
function B7(){
    Match();
    for (i = 0; i < 7; i++){
        reMatchY();
    } 
    if (i == 7)  {
        reMatchN();
    }; 
};
//best of 9
function B9(){
    Match();
    for (i = 0; i < 9; i++){
        reMatchY();
    } 
    if (i == 9)  {
        reMatchN();
    }; 
};
/*
Function E(){
    Match();
    </script>
        <p> rematch?</p>
        <button onclick="reMatchY()"> yes </button>
        <button onclick="reMatchN()"> No </button>
    <script>
};
*/ /*
</script>  
  
</body>  
</html>  
*/