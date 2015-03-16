var Game = function(){
  this.players = [];
};

Game.prototype.addPlayer = function(player) {
  this.players.push(player);
};

Game.prototype.gameWinner = function(player, computer) {
  if(player.weapon === "rock" && computer.weapon() === "scissors"){
    return "Player Wins"
  }
  else if(player.weapon === "scissors" && computer.weapon() === "paper"){
    return "Player Wins"
  }
  else if(player.weapon === "rock" && computer.weapon() === "paper"){
    return "Computer Wins"
  }
};
