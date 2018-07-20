function rollDice() {
  var player1 = document.getElementById("player1") ;
  var player2 = document.getElementById("player2") ;
var status = document.getElementById("status");
var p1 = Math.floor(Math.random() * 6) + 1;
var p2 = Math.floor(Math.random() * 6) + 1;
var total = p1 + p2;
player1.innerHTML = p1 ;
player2.innerHTML = p2 ;
status.innerHTML = "You rolled "+total+".";
if (p1 === p2) {
  status.innerHTML += "Doubles!!! you get a free turn";
};
};
