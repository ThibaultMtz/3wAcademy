/* //to get the script
<script type="text/javascript" src="match.js"></script>    
//to call the rematch button
<button onclick="reMatchY()"> yes </button> 
<button onclick="reMatchN()"> No </button>
<button onclick="startM()"> start game </button>
*/
var ContMat = false;
// start match
function startM(){
    ContMat = true;
}; 
//yes to rematch/continue match
function reMatchY(){
    ContMat = true;
};
//no to rematch/stop match
function reMatchN(){
    ContMat = false;
};