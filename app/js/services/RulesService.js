angular.module('rpsApp')
  .service('RulesService', function(){
    var self = this;
    self.winDeterminer = winDeterminer;


    function winDeterminer(player_choice, computer_choice){
      switch(player_choice)
      {
        case "rock":
          return _rock(computer_choice);
          break;
        case "paper":
          return _paper(computer_choice);
          break;
        case "scissors":
          return _scissors(computer_choice);
          break;
      }
    }

    function _rock(choice) {
      if(choice === "scissors"){
        return _playerWins();
      }
      else if (choice === "paper") {
        return _computerWins();
      }
      else{
        return _tie();
      }
    }
    function _paper(choice) {
      if(choice === "rock"){
        return _playerWins();
      }
      else if (choice === "scissors") {
        return _computerWins();
      }
      else{
        return _tie();
      }
    }

    function _scissors(choice) {
      if(choice === "paper"){
        return _playerWins();
      }
      else if (choice === "rock") {
        return _computerWins();
      }
      else{
        return _tie();
      }
    }


    function _playerWins(){
      return "player wins";
    }

    function _computerWins(){
      return "computer wins";
    }
    function _tie(){
      return "game is a tie";
    }

  });
