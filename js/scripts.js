function rollDice() {
  var player1 = document.getElementById("player1") ;
  var hold = document.getElementById("hold") ;
var status = document.getElementById("status");
var p1 = Math.floor(Math.random() * 6) + 1;
var pt1 = Math.floor(Math.random() *6) +p1;
var total1 = p1 + pt1 ;
var p2 = Math.floor(Math.random() * 6) + 1;
var pt2 = Math.floor(Math.random() * 6) + p2;
var total2 = p2 + pt2;
player1.innerHTML = p1 && pt1 ;
status.innerHTML = "You rolled "+total1+".";

// var total = p1 + p2;
// player1.innerHTML = p1 ;
// player2.innerHTML = p2 ;
// status.innerHTML = "You rolled "+total+".";
// if (p1 === p2) {
//   status.innerHTML += "Doubles!!! you get a free turn";
// };
};
// function rollDice() {
//   var player2 = document.getElementById("player2") ;
//   var hold = document.getElementById("hold") ;
//
//
//
// };
