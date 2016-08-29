angular.module('rpsApp')
  .service('RulesService', function(){
    var self = this;
    self.win_determiner = win_determiner;


    function win_determiner(player_choice, computer_choice){
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
        return _player_wins();
      }
      else if (choice === "paper") {
        return _computer_wins();
      }
      else{
        return _tie();
      }
    }
    function _paper(choice) {
      if(choice === "rock"){
        return _player_wins();
      }
      else if (choice === "scissors") {
        return _computer_wins();
      }
      else{
        return _tie();
      }
    }

    function _scissors(choice) {
      if(choice === "paper"){
        return _player_wins();
      }
      else if (choice === "rock") {
        return _computer_wins();
      }
      else{
        return _tie();
      }
    }


    function _player_wins(){
      return "player wins";
    }

    function _computer_wins(){
      return "computer wins";
    }
    function _tie(){
      return "game is a tie";
    }

  });
