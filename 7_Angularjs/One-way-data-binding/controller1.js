var app1 = angular.module("app1", []);
app1.controller("OneWayBindController", ['$scope', function($scope){
        $scope.a = 10;
        $scope.b = 20;
    }]);