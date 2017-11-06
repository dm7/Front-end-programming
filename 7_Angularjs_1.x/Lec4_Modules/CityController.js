var module = angular.module("cityApp",[]);
module.controller("cityController",
                                                                    function cityController($scope) {
                                                                        $scope.cities=[
                                                                                {city: 'Indore', state: 'MP'},
                                                                                {city: 'Pune', state: 'MH'},
                                                                                {city: 'Mumbai', state: 'MH'}];
                                                                        $scope.city = "Mumbai";
                                                                        $scope.state = "Maharashtra"
                                                                        $scope.cityInfo = function(){
                                                                            return $scope.city + ", " + $scope.state;
                                                                        }
                                                                    }
                           );