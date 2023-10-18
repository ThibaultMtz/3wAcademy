/*

//to get the script
<script type="text/javascript" src="match.js"></script>    

//to call the rematch button
<button onclick="reMatchY()"> yes </button> 
<button onclick="reMatchN()"> No </button>
<button onclick="startM()"> start game </button>
*/

var ContMat = false;

function startM(){
    ContMat = true;
}

function reMatchY(){
    ContMat = true;
};

function reMatchN(){
    ContMat = false;
};