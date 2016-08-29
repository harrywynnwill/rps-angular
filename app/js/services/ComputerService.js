angular.module('rpsApp')
  .service('ComputerService', function(){
    var self = this;

    self.CHOICE = ["rock","paper","scissors"];
    self.computerChooser = computerChooser();
    self.hello = "hi";

    function computerChooser() {
      return self.CHOICE[Math.floor(Math.random()*self.CHOICE.length)];
    };
  });
