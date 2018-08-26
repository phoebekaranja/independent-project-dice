function Names(name1, name2) {
  this.name1 = name1;
  this.name2 = name2;
}

var pigGame = {
  player1Score: 0,
  player2Score: 0,
  playerUp:  1,
  turnScore: 0,
};

function dieRoll () {
  die1 = Math.floor(Math.random()*6) +1;
  return die1;
}

var playerRoll = function() {
  var roll = dieRoll();
      }
  if(roll ===1){
    pigGame.turnScore = 0;
    alertEndTurn();
    switchPlayer();
  }
   else {
    pigGame.turnScore +=roll;
    if (pigGame.playerUp === 1) {
      if (pigGame.turnScore + pigGame.player1Score >= 21) {
        alertWinner(1);
      }
    } else if (pigGame.turnScore + pigGame.player2Score >= 21) {
      alertWinner(2);
  }
  }
  return dice };
}

function holdThePig() {
  var currentPlayer = pigGame.playerUp;
  if (currentPlayer ===1) {
    pigGame.player1Score += pigGame.turnScore;
  } else {
    pigGame.player2Score += pigGame.turnScore;
  }
  pigGame.turnScore = 0;
  switchPlayer();
}


function switchPlayer () {
  if (pigGame.playerUp === 1) {
    $("#player1Button").hide();
    $("#player2Button").show();
    pigGame.playerUp = 2;

  } else {
    $("#player2Button").hide();
    $("#player1Button").show();
    pigGame.playerUp = 1;

  }
}

function resetGame() {
  pigGame.player1Score = 0;
  pigGame.player2Score = 0;
  pigGame.playerUp = 1;
  pigGame.turnScore = 0;
}

// -----BUSINESS LOGIC --- (above) -----
// ------------------------------------
// ----USER LOGIC ---- (below)--------


function alertEndTurn(){
  alert("Sorry - you rolled a 1.  Your score remains the same and your turn is over.");
  $(".playerStatus").text(pigGame.playerUp);
}

function alertWinner(playerNumber) {
  alert("Player " + playerNumber + " is the BIG winner!!");
  $(".gameStatusDisplay").text(0);
}

$(document).ready(function() {

  $("form#Form").submit(function(event){
    var PersonName1 = $("input#PersonName1").val();
    var PersonName2 = $("input#PersonName2").val();
      $("#PersonName1").text(PersonName1);
      $("#PersonName2").text(PersonName2);
      // $("#Person2Button").hide();
      $("#Person1Button").show();
      $(".PersonStatus").text(pigGame.playerUp);
      event.preventDefault();

    var nameHolder = new Names(PersonName1, PersonName2);
  });
  $(".roll").click(function() {
    pigResult = playerRoll();
    $(".rollResult").text(pigResult);
    $(".turnScore").text(pigGame.turnScore);

  });

  $(".hold").click(function(){
    holdThePig();
    $("rollResult").text("");
    $(".Person1Score").text(pigGame.Person1Score);
    $(".Person2Score").text(pigGame.Person2Score);
    $(".PersonStatus").text(pigGame.PersonUp);
  });
});
