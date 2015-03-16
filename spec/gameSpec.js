describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
    player = new Player();
    computer = new Computer();
  });

  it("has no players before game is set up", function() {
    expect(game.players.length).toEqual(0);
  });

  it("can add players to the game", function(){
    game.addPlayer(player);
    game.addPlayer(computer);
    expect(game.players.length).toEqual(2);
  });

  it("knows that rock beats scissors", function(){
    player.weapon("rock");
    spyOn(computer, "weapon").and.returnValue("scissors")
    computer.weapon();
    expect(game.gameWinner(player, computer)).toEqual("Player Wins")
  })

  it("knows that paper beats rock", function(){
    player.weapon("rock");
    spyOn(computer, "weapon").and.returnValue('paper')
    computer.weapon();
    expect(game.gameWinner(player, computer)).toEqual("Computer Wins")
  })

  it("knows that scissors beats paper", function(){
    player.weapon("scissors");
    spyOn(computer, "weapon").and.returnValue('paper')
    computer.weapon();
    expect(game.gameWinner(player, computer)).toEqual("Player Wins")
  })

  it("knows when it's a draw", function(){
    player.weapon("scissors");
    spyOn(computer, "weapon").and.returnValue('scissors')
    computer.weapon();
    expect(game.gameWinner(player, computer)).toEqual("Draw")
  })

});
