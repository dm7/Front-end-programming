var module = angular.module("eventApp",[]);
module.controller("eventController",
                    function eventController($scope) {
                        $scope.login = function(){
                            alert("Welcome" + $scope.username + "!!")
                        }
                        
                        $scope.visible = false;
                        
                        $scope.display = function(){
                            $scope.visible = !$scope.visible;
                        }
                    }
                );