var app1 = angular.module("app1", []);
app1.controller("TwoWayDataBindController", ['$scope', function($scope){
        $scope.a = 10;
        $scope.b = 20;
        
        $scope.doSum = function(){
                        $scope.sum = parseInt($scope.a)
                                             +
                                     parseInt($scope.b);                   
                };
    }]);