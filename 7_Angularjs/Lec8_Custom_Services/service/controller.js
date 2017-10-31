var app = angular.module("app", []);
app.controller('emp', function($scope, $http, $log, calcService){
        $scope.a = 10;
        $scope.b = 20;
        
        $scope.doSum = function(){
            $scope.sum = calcService.getSum($scope.a, $scope.b);
        }
    });

app.service(
                'calcService',
                [
                 '$http',
                 '$log',
                 function($http, $log){
                        $log.log("instantiating calcService...");
                        
                        this.getSum = function(a, b){
                            return   Number(a) + Number(b);  
                        }
                        
                        /*this.getSum = function(a, b){
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
                        };*/                
                    }
                ]
            );