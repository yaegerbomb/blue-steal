(function() {
  'use strict';
  angular
    .module('gl.games', ['gl.core'])
    .directive('game-list', gameList);

  function gameList(){
    var directive = {
      restrict: 'E',
      template: '<div>{{test}}</div>',
      link: link,
      controller: GameListController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    function link(scope, element, attr){

    }
  }

  GameListController.$inject = ['$scope', 'dataservice'];

  function GameListController($scope, dataservice) {
    var vm = this;
    vm.gamesList = [];
    $scope.test = "this is my test";

    function activate(){
      return getGamesList().then(function(){
        console.log("Activated Game List View")
      })
    }

    function getGamesList(){
      return dataservice.getGamesList()
        .then(function(data){
          vm.gamesList = data;
          return vm.gamesList;
        })
    }
  }
})
