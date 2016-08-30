angular.module('rpsApp')
.controller('GameController', function(ComputerService, RulesService){
  var self =  this
  self.computer = ComputerService.computerChooser;
  self.playGame = playGame;
  self.playerSelection = playerSelection;
  self.CHOICES = ["rock","paper","scissors"];


  function playGame(choice){
    playerSelection(choice);
    console.log(self.playerChoice)
   return RulesService.winDeterminer(choice, self.computer)

  }
  function playerSelection(choice){
   return  self.playerChoice = choice;
  }

});
