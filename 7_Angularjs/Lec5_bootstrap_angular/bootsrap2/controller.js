var app = angular.module("app", []);
app.controller('emp', function($scope, empService){
    $scope.doSearch = function(){
        empService.findEmployeeById($scope.searchEmpno, function(r){
                $scope.empno = r.empno;
                $scope.ename = r.ename;
                $scope.sal = r.sal;
                $scope.deptno = r.hiredate;
                $scope.dob = r.dob;
            });     
    };
    
    });


app.service('empService', function($http, $log){
        this.findEmployeeById = function(empno, cb){
            $http({
                url:'http://localhost:8000/api/employees/' + empno,
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