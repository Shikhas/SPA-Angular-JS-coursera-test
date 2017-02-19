(function () {
//'use strict';
angular.module('LunchCheck',[])

.controller('LunchCheckController',function(){


  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {

   $scope.lunchlist = "";
   $scope.count = 0 ;
   $scope.arrayOfStrings="";
   $scope.msg = "heythere";
    $scope.showResponse = function () {
      countnoofitems();
      if ($scope.count > 3){
      scope.msg = "Too much !";}
      else {$scope.msg = "Enjoy!";}

    };

    $scope.splitString = function(stringToSplit, separator) {
      var arrOfStrings = stringToSplit.split(separator);
      $scope.arrayOfStrings = arrOfStrings;

   };

    $scope.countnoofitems = function () {
      splitString($scope.lunchlist,comma);
      $scope.count = arrayOfStrings.length;
    };




    }














});



})();
