describe('RulesService', function(){
  var rulesService;

  beforeEach(module('rpsApp'));


  beforeEach(inject(function(RulesService) {
    rulesService = RulesService;
  }));

    describe('#win_determiner', function() {
      it('determines the winner of the game', function(){
        expect(rulesService.win_determiner("scissors", "rock")).toEqual("computer wins");
        expect(rulesService.win_determiner("scissors", "paper")).toEqual("player wins");
        expect(rulesService.win_determiner("scissors", "scissors")).toEqual("game is a tie");
        expect(rulesService.win_determiner("rock", "paper")).toEqual("computer wins");
        expect(rulesService.win_determiner("rock", "scissors")).toEqual("player wins");
        expect(rulesService.win_determiner("rock", "rock")).toEqual("game is a tie");
        expect(rulesService.win_determiner("paper", "scissors")).toEqual("computer wins");
        expect(rulesService.win_determiner("paper", "rock")).toEqual("player wins");
        expect(rulesService.win_determiner("paper", "paper")).toEqual("game is a tie");

      });
    });

});
