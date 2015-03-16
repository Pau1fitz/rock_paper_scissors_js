describe("Computer", function(){

  beforeEach(function(){
    computer = new Computer();
  })

  it("can choose a weapon", function(){
    spyOn(computer, "weapon").and.returnValue('scissors')
    computer.weapon();
    expect(computer.weapon()).toEqual('scissors')
  })
})

