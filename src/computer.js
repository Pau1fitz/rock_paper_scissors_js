var Computer = function(){
};

Computer.prototype.weapon = function() {
  var number = Math.floor((Math.random() * 10) + 1);
  if(number < 3){
    this.weapon = "scissors"
  }
  else if(number < 6){
    this.weapon = "paper"
  }
  else{
    this.weapon = "rock"
  }
};