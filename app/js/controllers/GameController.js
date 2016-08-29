angular.module('rpsApp')
.controller('GameController', function(ComputerService, RulesService){
  var self =  this
  self.computer = ComputerService.computerChooser;
  self.play_game = play_game;

  function play_game(choice){
    console.log(choice)
    console.log(self.computer)
   return RulesService.win_determiner(choice, self.computer)

  }
});
