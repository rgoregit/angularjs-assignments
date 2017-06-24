(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.menuList = "";
  $scope.stateOfBeing = "Please enter data first";
  $scope.stateOfBeingStatus = "EmptyMenu"; //Result

  $scope.sayMessage = function () {
    return "Yaakov likes to eat healthy snacks at night!";
  };

  function checkEmpty(entry){
    return entry.trim() != '';
  }

  $scope.checkList = function () {
    var arrayOfStrings = $scope.menuList.split(",");
    arrayOfStrings = arrayOfStrings.filter(checkEmpty);
    if (arrayOfStrings.length < 1) { $scope.stateOfBeing = "Please enter data first" ;   $scope.stateOfBeingStatus = "EmptyMenu"; }
    else if (arrayOfStrings.length <= 3 ){ $scope.stateOfBeing = "Enjoy!" ;  $scope.stateOfBeingStatus = "Result"; }
    else if (arrayOfStrings.length > 3) {$scope.stateOfBeing = "Too Much!";   $scope.stateOfBeingStatus = "Result"; }
  };
}

})();
