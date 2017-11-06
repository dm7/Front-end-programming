var app = angular.module("app", []);
app.controller('emp', function($scope, $http, $log, calcService){
        $scope.a = 10;
        $scope.b = 20;
        
        $scope.doSum = function(){
            $scope.sum = calcService.getSum($scope.a, $scope.b);
        }
    });

app.provider('calcService', function(){
                
                var baseURL = "";
                this.config = function(url){
                        baseURL = url;
                }
                
                this.$get = function($http, $log){
                    $log.log("instanting calcService..");
                    var ocalcService = {};
                    /*ocalcService.getSum = function(a, b){
                        return Number(a) + Number(b);
                    }*/ //local computation
                    
                        ocalcService.getSum = function(a, b){
                            $http({
                                    url: baseURL + 'Sum?a=' + a + '&b=' + b,
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
        });

app.config(function(calcServiceProvider){
        calcServiceProvider.config("http://localhost:4467/");
        });