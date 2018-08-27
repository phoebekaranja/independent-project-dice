var currentPlayer = 1;
var winner = null;

var FirstplayerOnHold = false;
var SecondplayerOnHold = true;
var dice = {
  sides: 6,
  roll: function() {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
   return randomNumber;
 }
}
  var firstscore = 0;
  var firstdice = 0;
  var scores = 0;
$(document).ready(function() {

 $("#First-player-roll").click(function() {
  dice1 = dice.roll();
  firstdice = dice1;
  scores += firstdice;
  if (firstscore + scores <= 10) {
    firstscore += firstdice;
    $("#round-total-1").text(firstdice);
    $("#score1").text(firstscore);
    $("#total-score-1").text(scores)
  } else {
    winner = 1
    $("#total-scores-1").text(scores)
    alert("You are a winner! Player " + winner + " wins!")
  }
  console.log(firstscore)
});

$("#First-player-hold").click(function() {

  console.log("one on hold?: " + FirstplayerOnHold);
  if (!FirstplayerOnHold) {
    firstdice = dice
    scores += firstscore

    firstscore = 0;

    $("#total-score-1").text(totalfirstscore);
    currentPlayer = 2;
    $("#scores").text(scores);
  }
  FirstplayerOnHold = true;
  FirstplayerOnHold = false;
});
});
console.log(FirstplayerOnHold)
