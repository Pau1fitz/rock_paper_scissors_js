describe("Player", function(){

  beforeEach(function(){
    player = new Player();
  });

  it("has a name", function(){
    player.name("Paul");
    expect(player.name).toEqual("Paul")
  })

  it("can choose a weapon", function(){
    player.weapon("scissors")
    expect(player.weapon).toEqual("scissors")
  })

});
