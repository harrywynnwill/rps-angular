describe('ComputerService', function(){
  var computerService;

  beforeEach(module('rpsApp'));


  beforeEach(inject(function(ComputerService) {
    computerService = ComputerService;
  }));

    describe('#computerChooser', function() {
      it('returns a choice from the computer', function(){
        spyOn(Math, 'random').and.returnValue(0);
        expect(computerService.computerChooser).toEqual("SCISSORS");
      });
    });

});
