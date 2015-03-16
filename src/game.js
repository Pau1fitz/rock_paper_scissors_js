var Game = function(){
  this.players = [];
  BEATEN_BY = {"scissors" : "paper", "rock" : "scissors", "paper" : "rock"};
};

Game.prototype.addPlayer = function(player) {
  this.players.push(player);
};

Game.prototype.winner = function() {
  if(this.players[0].weapon === this.players[1].weapon()) {
    return "Draw";
  } else if (this.players[0].weapon === BEATEN_BY[this.players[1].weapon()]) {
    return "Computer Wins";
  } else {
    return "Player Wins";
  }
};

