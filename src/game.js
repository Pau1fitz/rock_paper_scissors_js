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
   else if(player.weapon === "paper" && computer.weapon() === "rock"){
    return "Player Wins"
  }
  else if(player.weapon === "paper" && computer.weapon() === "scissors"){
    return "Computer Wins"
  }
  else if(player.weapon === "rock" && computer.weapon() === "paper"){
    return "Computer Wins"
  }
  else if(player.weapon === "scissors" && computer.weapon() === "rock"){
    return "Computer Wins"
  }
  else{
    return "Draw"
  }
};
