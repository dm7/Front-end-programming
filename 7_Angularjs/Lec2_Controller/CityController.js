/* pre 1.3 angular accepts global controllers*/
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
