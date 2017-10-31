var app = angular.module("app", []);
app.controller('emp', function($scope, $http, $log, calcFactory){
        $scope.a = 10;
        $scope.b = 20;
        
        $scope.doSum = function(){
            $scope.sum = calcFactory.getSum($scope.a, $scope.b);
            
        }
    });

app.factory(
                'calcFactory',
                [
                 '$http',
                 '$log',
                 function($http, $log){
                        $log.log("instantiating calcFactory...");
                        var ocalcService = {};
                        ocalcService.getSum = function(a, b){
                            $http({
                                    url:'http://localhost:4467/Sum?a=' + a + '&b=' + b,
                                    method: 'GET'
                                 }).
                                 then(
                                         function(resp){
                                            return resp.data;    
                                         }, function(resp){
                                            $log.log(resp);           
                                         }
                                     );
                        };
                        return ocalcService;
                    }
                ]
            );