angular.module('angular2048', ['Game'])
  .controller('GameController', ['$scope', 'GameManager', function($scope, GameManager) {
    $scope.gameManager = GameManager;
  }]);