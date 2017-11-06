var person = function(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

/*
 * Now here, the object that can be passed to logPerson()
 * can be built byt fetchig data from database or aything else.
 * In our case the object is 'john'
 *
 * Injectig objects to a function
 * This is Dependency Injection
 *
 * > console.log(angular.injector().annotate(logPerson))
 *     ["person"]
 *
 * So, angular runs the same logic to read the parameters
 * of the controller to check whether developer has given $scope.
 *
 * AngularJS will create the $scope object and then pass it to the
 * controller function.
 * 
 */
function logPerson(person) {
    console.log(person);
}

var john = new Person('john', 'Doe');
logPerson(john);