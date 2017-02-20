(function () {
//'use strict';
angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController);


  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {

   var t = $scope.lunchlist ;
   $scope.showResponse = function ()
    {
       if(!$scope.lunchlist){

        $scope.msg = 'Please enter the data first';
        return;
        }
        var aftersplit  = $scope.lunchlist.split(",");
        if (aftersplit.length > 3){
         $scope.msg = 'Too much !';
         }else {
        $scope.msg = 'Enjoy!';
        }

    };

    }
})();
