/*
 * Destructuring
 *
 *
 * Example1
 */
var foo = {
  veryLargeName1: 1,
  veryLargeName2: 2
};

//In ES5
var bar = foo.veryLargeName1; var baz = foo.veryLargeName2;
//In ES6
var {bar, baz} = foo;
console.log(bar);

//Example2
var tenses = ["me", "you", "he"];
//In ES5
var firstPerson = tenses[0];
//In ES6
var [ firstPerson, secondPerson ] = tenses;


//Example3
Promise
        .all([promise1, promise2])
        .then(function([ results1, results2 ]){ console.log(results1); });



/*
 * Passing objects
 * 
 * Example1
 */
var foo =2;
var obj ={
  bar: 1,
  foo, //In ES6
  baz:3
};

//Example2
var name="will";
var age=34;
some.method({name, age}); // method() is passing {name: "will", age: 34}

/*
 *Adding custom keys in object literals
 *
 */
var name = "will";

//In ES5
var obj = {};
obj["name" + name]="some value"

//In ES6
var obj = {
    ["name" + name]: "somevalue"
};

/*
 *Destructuring arguments
 *
 */
//In ES5
function calcBmi(weight, height, max, callback ) {
    var bmi = weight / Math.pow(height, 2);
    if (bmi > max) {
        console.log("you are over weight");
    }
    if (callback) {
        callback(bmi);
    }
}
calcBmi(weight, height, 25);
calcBmi(weight, height, null, function(){ });

//In ES6
function calcBmi({ height:h, weight:w, max, callback }) {
    var bmi = w / Math.pow(h, 2);
    if (bmi > max) {
        console.log("you are over weight");
    }
    if (callback) {
        callback(bmi);
    }
}
calcBmi({weight, height, max: 25});
calcBmi({ weight, height, callback: function(){ }} );


/*****************************************************************/

/*
 *Template strings
 *
 *
 */
//Example1

//In ES5
var name = "will";
var thing = "party";
var greet = "hi, my name is \n" +
                name + " and I like to \n" +
                thing + ".";

//In ES6
var greet = `hi, my name is
            ${name} and I like to
            ${thing}`;

/*****************************************************************/


/*
 *
 *Block scoping
 *
 */
//In ES5
var a = 1;
if (true) {
    var b = 2;
}
console.log(b); // visible because of variable hoisting

//In ES6
var a = 1;
if (true) { // for(20) {
    let b = 2; //Ideally using 'var' in blocks is not good
}
console.log(b); // Invisible, because b is in block scope

//In ES6
const foo =1; //Use 'const' for everything, unless you mutate
if (true) {
    const b = 2; // a let scope constant
    const bar = {a: 1};
    bar.a = 2; //can mutate members
}
console.log(b); //b is invisible


/************************************************************/

/*
 *
 *Arrow functions
 *
 *
 */

//In ES5 - Example1
var foo = function(a,b){ return a+b; };
//In ES6
var foo =         (a,b) => {return a+b; };

//Arrow function are mostly useful, when you pass functions as argument

//In ES5 - Example2
do.something(function(a, b){return a+b;});
//In ES6
do.something((a, b) => a+b); // for onle liner code

//In ES5 - Example3
do.something(function(a){return a+1;});
//In ES6
do.something(a => a++); // for one liner code

//Example4
[0, 1, 2].map(val => val++); //[1, 2, 3]


//Example5 - Context binding
//In ES5
var module = {
    age: 30,
    foo: function(){
        setTimeout(
                function(){console.log(this.age);},
                100);
    }
};
module.foo();

//In ES6
var module = {
    age: 30,
    foo: function(){
        setTimeout(
                () => {console.log(this.age);},
                100);
    }
};
module.foo();


/***********************************************/

/*
 * class
 */
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

/*
 *Hoisting
 *An important difference between function declarations and
 *class declarations is that function declarations are hoisted
 *and class declarations are not. You first need to declare
 *your class and then access it, otherwise code like the
 *following will throw a ReferenceError:
 */

/*
 *A class expression is another way to define a class. Class
 *expressions can be named or unnamed. The name given to a
 *named class expression is local to the class's body.
 *
 */
// unnamed
var Polygon = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// named
var Polygon = class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

//Prototype methods
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  
  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
}

const square = new Polygon(10, 10);
console.log(square.area);

/*
 *Static methods:
 *
 *The static keyword defines a static method for a class.
 *Static methods are called without instantiating their
 *class and are also not callable when the class is instantiated.
 *Static methods are often used to create utility functions
 *for an application.
 *
 */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.sqrt(dx*dx + dy*dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
console.log(Point.distance(p1, p2));



/*
 *Sub classing with extends
 *
 *The extends keyword is used in class declarations
 *or class expressions to create a class as a child
 *of another class.
 *
 */
class Animal { 
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

/*One may also extend traditional function-based "classes":*/
function Animal (name) {
  this.name = name;  
}
Animal.prototype.speak = function () {
  console.log(this.name + ' makes a noise.');
}

class Dog extends Animal {
  speak() {
    super.speak();
    console.log(this.name + ' barks.');
  }
}

var d = new Dog('Mitzie');
d.speak();

/*
 *Species:
 *
 *You might want to return Array objects in your derived
 *array class MyArray. The species pattern lets you
 *override default constructors.
 *
 *For example, when using methods such as map() that
 *returns the default constructor, you want these methods
 *to return a parent Array object, instead of the MyArray
 *object. The Symbol.species symbol lets you do this:
 *
 */
class MyArray extends Array {
  // Overwrite species to the parent Array constructor
  static get [Symbol.species]() { return Array; }
}
var a = new MyArray(1,2,3);
var mapped = a.map(x => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);   // true


/*
 *
 *Super class calls with super:
 *
 *The super keyword is used to call functions on an object's parent.
 *
 *
 */
class Cat { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(this.name + ' roars.');
  }
}

/******************************************************/

/*
 *Async functions
 *
 */
async function(){
    var friends = await $.get("http://some URL");
    console.log(friends);
}

/****************************************************/

/*
 *ES6 generators
 *
 *Generators are paradigm shifters
 *
 *
 */

//Example1
var myGen = function*(){
  var one = yield 1; // Here yield provides value '1' to gen.next() and does not assign value '1' to one.
  var two = yield 2;
  var three = yield 3;
  console.log(one, two, three); 
};
var gen = myGen(); // get the generator ready to run

console.log(gen.next()); // Returns {value: 1, done: false}
console.log(gen.next()); // Returns {value: 2, done: false}
console.log(gen.next()); // Returns {value: 3, done: false}
console.log(gen.next()); // Returns {value: undefined, done: true} and displays - undefined, undefined, undefined
console.log(gen.next()); // Returns {value: undefined, done: true}

var gen = myGen(); // get the generator ready to run

/*
 *The only problem here is that the final result it will log
 *will be undefined, undefined, undefined Since yield sits
 *in-between the yielded value and the rest of the function,
 *we have to pass a value back in for it to get assigned to the variable.
 *
 */
console.log(gen.next(6)); // Returns {value: 1, done: false} and value '6' is assigned to one
console.log(gen.next(7)); // Returns {value: 2, done: false} and value '7' is assigned to two
console.log(gen.next(8)); // Returns {value: 3, done: false} and value '8' is assigned to three
console.log(gen.next());  // Returns {value: undefined, done: true} and displays - 6, 7, 8
console.log(gen.next());  // Returns {value: undefined, done: true} 

//Another approach is..

function smartCode(generator) { //give me a generator function
  var gen = generator();//start up the generator
  var yieldedVal = gen.next().value;//get the first yielded value
  if(yieldedVal.then) { //is it a promise?
    //it's a promise!!!
    yieldedVal.then(gen.next);//wait for it to resolve, then pass the resolved value back in
  }
}
smartCode(myGen);

//Example2


/***********************************************/

