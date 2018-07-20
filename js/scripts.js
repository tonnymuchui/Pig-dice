function rollDice() {
  var player1 = document.getElementById("player1") ;
  var hold = document.getElementById("hold") ;
var status = document.getElementById("status");
var p1 = Math.floor(Math.random() * 6) + 1;
var pt1 = Math.floor(Math.random() *6) +p1;
var hod = Math.floor(Math.random() *0) +0;
var total1 = p1 + pt1 ;
player1.innerHTML = p1 && pt1 ;
status.innerHTML = "You rolled"+p1+".";
hold.innerHTML = total1;
if (total1 > 15) {
  hold.innerHTML += "win!!!!";
};
};
function rollDice2() {
  var player2 = document.getElementById("player2") ;
  var hold = document.getElementById("hold") ;
  var status = document.getElementById("status");
  var p2 = Math.floor(Math.random() * 6) + 1;
  var pt2 = Math.floor(Math.random() * 6) + p2;
  var hod = Math.floor(Math.random() *0) +0;
  var total2 = p2 + pt2;
  player2.innerHTML = p2 && pt2 ;
  status.innerHTML = "You rolled "+p2+".";
  hold.innerHTML = total2;
  if (total2 > 15) {
    hold.innerHTML += "win!!"+".";
  };
};
