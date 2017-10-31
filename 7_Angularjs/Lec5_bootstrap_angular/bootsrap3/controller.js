var app = angular.module("app", []);
app.controller('emp', function($scope, empService){
    $scope.doSearch = function(){
        
        empService.getEmployees(function(r){
                $scope.employees =  r;
            });     
    };
    
    });


app.service('empService', function($http, $log){
        this.getEmployees = function(cb){
            $http({
                url:'http://localhost:8000/api/employees',
                method: 'GET'
                })
            .then(
                  function(resp){
                     cb(resp.data); 
                  }, function(resp){
                     $log.error("ERROR occured");
                     debugger;
                  }
                  
                );
        }
    });