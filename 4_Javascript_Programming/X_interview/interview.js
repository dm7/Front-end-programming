/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 *
 */

/*
  Javascript History
    1) Javascript is taken to standardization in ECMA - 1996
    2) ECMA is the spec. Javascript is an implementation(ActionScript is another implementation)
    3) ECMAScript 2 - 1998
    4) ECMAScript 3 - 1999
    5) In 2005, Mozilla and Macromedia worked on ECMAAcript 4 from ES 3
    6) Douglas Crockford and Microsoft opposed the forming standard.
    7) ECMAScript 3.1 was the compromise.
    8) In 2009, opposing parties meet in Oslo and achieve an agreement.
    9) ES3.1 is renamed to ES5.
    10) In 2015, ES6 was released.
    11) Version names will be based on the year of release - ES6 is ES2015, ES7 should be ES2016
*/

/*
  https://www.youtube.com/watch?v=Kq4FpMe6cRs
  ES5
  1) ES5 introduced 'using strict' to avoid bad coding from ES3. This helps incremental porting of old code.
  2) Getter/Setter - ES3 can't create properties which compute on assignment and reading
                     ES5 codify proven practice.
  3) ES5 gave property attribute control
                     ES3 semantics can only create and define per-property attributes
                     a) ReadOnly -> writable: does assignment work?
                     b) DontEnum -> enumerable: does for-in see it?
                     c) DontDelete -> configurable: can its shape change?
       Object.defineProperty(Object.prototype, 'myToString',{
                                                              value: function(){return Object.prototype.toString() + "controlled";},
                                                              enumerable: false,
                                                              writable: true,
                                                              configurable: true
                                                            });
       Object.defineProperty(domoid, 'innerHTML',{
                                                  get: function(){return ...},
                                                  set: function(newHTML){...}
                                                 });
       Property attribute control + accessor properties = Able to emulate DOM api in ES code.
  4) ES3 makes Robustness too hard, because,
              a) objects are merely mutable maps of properties, breaks encapsulation
              b) Silent errors, for ex - assignment to a readable property.
              c) Even lexical closure aren't quite encapsulated
                 -----In ES3 there are toxic leaks of window object
       ES5 addresses mutability by introducing seal() and freeze() api
         Primordial objects should be frozen after initialization

         Object.seal is a superset of Object.preventExtensions in functionality
         in that while it prevents tacking on of arbitrary properties to objects
         it also prevents altering the attributes of the properties that already
         exist on the object.

         Object.freeze is a superset of both Object.seal and Object.preventExtensions
         in that it subsumes the functionality of both of those functions with
         the added responsibility of making all of the existing properties on
         the object read-only.
       ES5 introduced `using strict` directive for to uncover silent errors
         <script>
            'using strict'
            // strict program
         </strict>
         <script>
            // .. non strict program
            'using strict' //Still parses on ES3 as no-op
            // .. strict program
         </script>
         Another advantage of `using strict` is to avoid leaks in window object, as shown below
           function Point(x, y){
                 this.x = +x;
                 this.y = +y;
           }
           var pt = Point(3, 5); // oops forgot "new"
           Nonstrict: {window.x = 3; window.y = 5;}
           Strict:   {undefined.x = 3; undefined.y = 5;}
         In strict code, there is no coercion of this.
           Boolean.prototype.not = function(){
                                     return !this;
                                }
           Nonstrict: true.not() // false
                      false.not() // false

           Strict: true.not()  //false
                  false.not()  // true



*/

/*
  https://www.youtube.com/watch?v=8Rc2CCk6UTs
  ES6
  1) New features:
     Promises, Destructuring, Maps, Modules
  2) Syntactic sugar:
     Arrow functions, String templates, Classes, iterators, generators & proxies
  3) let - block scope and no hoisting
  4) const - Block from changing variable reference but not object properties(obj.prop1)
  5) Arow function:
      let inc = x =>  x + 1
      let inc = (x, y) => x + y;
      let inc = () => 7;
      let inc = (x) => {
                         console.log(x);
                         return 7;
                       }
      let f =  x => ({a:3});

  6) Arrow functions capture the this value of the enclosing context
     Old:
     this.x = 7;
     setTimeout(function(){
       cosnole.log(this.x); //undefined
     }, 2000);

     New:
     this.x = 7;
     setTimeout(() => console.log(this.x),  2000); // 7
   7) Template strings: using back-ticks
      let name = 'John';
      `Hi $(name),
        Did you know that 5 * 3 = ${5*3}`; // Any thing in ${} is evaluated
   8) class Sith extends Bedi{
         constructor(){
           super();
           this.x = 10;
         }
         static inc(x){return x + 1;}
      }
   8) Getters and Setters can be introduced in class
   9) ES6 classes are not hoisted
  10) Computed properties - both class & object definitions
      let ind = 100;
      let foo = {
         ['question'+ind]: 'q' + ind;
         ['answer'+ind](x){
           return 2;
         }
      }; //foo.question100;
  11) Destructuring - arrays and objects
      let [a,b] = [3, 5];
      let [a,b,c] = "def";
      let [a, b=3, c=5] = [1, undefined];
  12) Map/WeakMap/Set/WeakSet
  13) Modules
      //   ShapeFile.js
      export default class Shape{
        getColor(){}
      }

      // main.js
      import Shape from 'ShapeFile';
      let shape = new Shape();

      //circle.js - export by name
      export function diameter(r){
          return 2 * Math.PI * r;
      }
      export let area = r => Math.PI*(Math.pow(r, 2));

      //main.js - import by name
      import {area} from 'circle.js';
      area(5);

      or

      import {area as CircleArea, diameter} from 'circle';
      import area as CubeArea from 'Cube';
      import * as tri from 'Traingle';
      tri.area(5);

      Module structure is statically defined.
      Module dependencies can be resolved statically.
      You can still load modules at runtime.

      System.module('module')
      .then(module => {} )
      .then(error => {});




*/

/*
  Date object
  1) Provides date and time in JavaScript
  2) new Date(year, month, day, hours, minutes, seconds, ms);
               |      |     |     |       |        |      |
               Mandatory   O      p     t     i  o   n  a   l
             2012    0-11  1-31  0-23   0-59      0-59   0-999
*/

var d = new Date(); // provides current date and time but not UTC
d = new Date(0 /*ms*/); // ms in GMT from midnight on Jan 1, 1970. Provides date & time in ITC
new Date(2012, 11, 05, 05, 14, 34, 990);
d.getDate(); // 20 - 20th
d.getDay(); // 1  - Monday
d.getFullYear() // 2016
d.getHours(); // 21
d.getMilliSeconds(); // 490
d.getMinutes(); // 21
d.getMonth();
d.getSeconds();
d.getTime(); // ms after Jan 1, 1970
d.getTimezoneOffset(); // -330 minutes
d.getUTCHours(); //ITC hour - 05:30
d.toDateString() // "Mon Sep 10 2012"
d.toLocaleDateString(); // "Monday, September 10, 2012" based on your location
d.toGMTString(); // "Tue, 19 Jan 2016 23:44:57 GMT"
d.toISOString(); // date in ISO 8601 date format "2016-01-19T23:44:57.858Z"
d.toLocaleTimeString(); // "23:44:57"




/*
  String object
    Every string is immutable
    Each character is a UTF-16 encoded number.

*/
var str = 'abcd"efgh';
str = "abc'efg";
str = 'abc\'efg';
str= "web\ntunings";
'abc'.charChodeAt(1); // 98
"abc" + "def" // abcdef
"abc".charAt(0); // "a"
"abc".concat("def", "ghi"); // abcdefhgi


//Creates a string from unicode code points
String.fromCharCode(97); // a
String.fromCharCode(97, 98); // ab
String.fromCharCode(97, 98, 99); // abc

//substring api
var str= 'javascript tutorials java tutorials';
str.indexOf('tutorials'); // 11; first occurence
str.indexOf('tutorials', 12); // 26; starts looking from 12th index
str.lastIndexOf('java'); //20
str.lastIndexOf('java', 5); // -1
str.lastIndexOf('java', 15); // 14
str.lastIndexOf('java', 25); // 23
str.slice(1, 5);   // 1 to 4 index
str.slice(4);      // 4 to end index
str.slice(-4, -1);
str.slice(-1);

"1:2:3".split(':');            // ['1', '2', '3']
"abc,def,123".split(',');      // ['abc', 'def', '123']
"abc,def,123".split(',', 2);   // ['abc', 'def']
"abc".split("");            // ['a', 'b', 'c']
"abc".split("", 2);            // ['a', 'b']

"abc".substr(0, 3); // "abc"

"aBc".toUpperCase(); // "ABC"
"ABC".toLowerCase(); // "abc"

"  a bc de ".trim(); // "a bc de"


/*
  All primitive types are immutable
  All reference types are mutable
*/



/*
  object attributes are prototype, class, extensible
  property attributes are writable, configurable, enumerable, value
*/

/*
  variable hoisting makes a variable declaration appear on top
*/
a = 1;a=a+1;var a;

/*
  Function hositing make a function declaration appear on top
*/
f();
function f(){}



/*
  Function expression Vs Function definition.
  1) Runtime Vs Parse time loading
  2) Use function expression, when you need to use it in different scopes
    function outer(){
         function inner(){

         }
    }
    outer();
    inner();// Error ...calling inner..will not be found..
*/
var inner;
function outer(){
   inner=function(){

        }
}
outer();
inner();// will work


/*
  this keyword
  1) this is a keyword but not variable/object/scope
  2) this does not have scope.
  3) this is used for method chaining
*/
var obj = {name: 'praveen'}
obj.toUpperCase = function(){this.name = this.name.toUpperCase(); return this;}
obj.toLowerCase = function(){this.name = this.name.toLowerCase(); return this;}



/*
  Javascript has no type checking
  Optional parameters using functions
  Default parameters using functions
*/
2 == "2" /* true */

function f1(x, y, z){
  console.log("x is: " + x + " | y is: " + y + " | z is: " + z );
}

f1(100);

function f2(x, y=200, z=300){
  console.log("x is: " + x + " | y is: " + y + " | z is: " + z );
}

f2(100);




/*
  JSON stringification using optional parameters
*/
function JSONFilter(obj, filter){
  if(filter !== undefined){
    if(Array.isArray(filter)){
      return JSON.stringify(obj, filter);
    }else{
      throw new Error("Array is expected");
    }
  }else{
    return JSON.stringify(obj, filter);
  }
}

try{
  console.log( JSONFilter( { x:1, y:2, p:"abc",q:[1,2,3] }, ['x', 'q'] )  );
  console.log(JSONFilter({x:1, y:2, p:"abc",q:[1,2,3]}));
  console.log( JSONFilter( { x:1, y:2, p:"abc",q:[1,2,3] }, 'q')  ); //Array is expected
}catch(e){
  console.log(e.message);
}




/*
  arguments object
  arguments is an array like object, but not an array.
  An arguments object will not be created if arguments is the name of a formal parameter or is used as a variable or function declaration within the function body
*/
function test(a,b){
  console.log('first argument:' + arguments[0]);
  console.log('calle name: ' + arguments.callee);
  console.log('caller name: ' + arguments.caller);
  console.log('length: ' + arguments.length);
}
test(10);


/*
  Applications of arguments object:
  1) Functions that take unlimited arguments

*/
var average = function(/*numbers*/) {
    for (var i=0, total = 0, len=arguments.length; i<len; i++) {
        total += arguments[i];
    }
    return total / arguments.length;
}
average(50, 6, 5, -1); //15


/*
  2) Verifying all named arguments are supplied
*/
var requireAllArgs= function(fn) {
    return function() {
        if (arguments.length < fn.length) {
            throw(["Expected", fn.length, "arguments, got", arguments.length].join(" "));
        }
        return fn.apply(this, arguments);
    }
}

var divide = requireAllArgs(function(a, b) {return a/b});

divide(2/5); //"Expected 2 arguments, got 1"
divide(2,5); //0.4


/*
  3) A string formatter
*/
function format(string) {
    var args = arguments;
    var pattern = RegExp("%([1-" + (arguments.length-1) + "])", "g");
    return string.replace(pattern, function(match, index) {
        return args[index];
    });
};

format("a %1 and a %2", "cat", "dog"); //"a cat and a dog"


/*
  4) Function currying using arguments
  The typical JavaScript implementations of curry, partial and compose store the arguments object for later concatenation with the runtime arguments of the inner function.
*/
Function.prototype.curry = function() {
    if (arguments.length<1) {
        return this; //nothing to curry with - return function
    }
    var __method = this;
    var args = [].slice.apply(arguments);
    return function() {
        return __method.apply(this, args.concat([].slice.apply(arguments)));
    }
}

var converter = function(ratio, symbol, input) {
    return [(input*ratio).toFixed(1),symbol].join(" ");
}

var kilosToPounds = converter.curry(2.2,"lbs");
var milesToKilometers = converter.curry(1.62, "km");

kilosToPounds(4); //8.8 lbs
milesToKilometers(34); //55.1 km



/*
  IIFE
  Purpose is to create temporary scope
*/



/*
  call()
  1) Using call to chain constructors for an object
     You can use call to chain constructors for an object, similar to Java.

     In the following example, the constructor for the Product object is defined
     with two parameters, name and price. Two other functions Food and Toy invoke
     Product passing this and name and price. Product initializes the properties
     name and price, both specialized functions define the category.
*/
function Product(name, price) {
  this.name = name;
  this.price = price;

  if (price < 0) {
    throw RangeError('Cannot create product ' +
                      this.name + ' with a negative price');
  }
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);



/*
  2) Using call to invoke an anonymous function
*/
var animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
];

for (var i = 0; i < animals.length; i++) {
  (function(i) {
    this.print = function() {
      console.log('#' + i + ' ' + this.species
                  + ': ' + this.name);
    }
    this.print();
  }).call(animals[i], i);
}



/*
  3) Using call to invoke a function and specifying the context for 'this'
*/
function greet() {
  var reply = [this.person, 'Is An Awesome', this.role].join(' ');
  console.log(reply);
}

var i = {
  person: 'Douglas Crockford', role: 'Javascript Developer'
};

greet.call(i); // Douglas Crockford Is An Awesome Javascript Developer


/*
  apply()
  1) Using apply to chain constructors
*/
Function.prototype.construct = function (aArgs) {
  var oNew = Object.create(this.prototype);
  this.apply(oNew, aArgs);
  return oNew;
};

function MyConstructor() {
  for (var nProp = 0; nProp < arguments.length; nProp++) {
    this['property' + nProp] = arguments[nProp];
  }
}

var myArray = [4, 'Hello world!', false];
var myInstance = MyConstructor.construct(myArray);

console.log(myInstance.property1);                // logs 'Hello world!'
console.log(myInstance instanceof MyConstructor); // logs 'true'
console.log(myInstance.constructor);              // logs 'MyConstructor'



/*
  2) Using apply and built-in functions
*/
// min/max number in an array
var numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply
var max = Math.max.apply(null, numbers);
// This about equal to Math.max(numbers[0], ...)
// or Math.max(5, 6, ...)

var min = Math.min.apply(null, numbers);

// vs. simple loop based algorithm
max = -Infinity, min = +Infinity;

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

/*
  3) Using apply in monkey-patching
*/
var originalfoo = someobject.foo;
someobject.foo = function() {
  // Do stuff before calling function
  console.log(arguments);
  // Call the function as it would have been called normally:
  originalfoo.apply(this, arguments);
  // Run stuff after, here.
}


/*
  bind()
  1) function currying using bind
*/

function alterAttribute(name, value){
  var descObject = {};
  descObject[name] = value;
  for(prop in this){
    Object.defineProperty(this, prop, descObject);
  }
}

var o = {x:1, y:2, z:3};

var curry1  = alterAttribute.bind(o, 'writable');
curry1(false);



/*
  2) Creating a bound function
*/
this.x = 9;
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX(); // 9, because in this case, "this" refers to the global object

// Create a new function with 'this' bound to module
//New programmers (like myself) might confuse the global var getX with module's property getX
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81


/****** DOM***********/

/*
  interface Node : EventTarget{
      readonly attribute unsigned short nodeType;
      readonly attribute DOMString nodeName;

      readonly attribute DOMString baseURI;

      readonly attribute Document? ownerDocument;
      readonly attribute Node? parentNode;
      readonly attribute Element? parentElement;
      boolean hasChildNodes();
      [SameObject] readonly attribute NodeList childNodes;
      readonly attribute Node? firstChild;
      readonly attribute Node? lastChild;
      readonly attribute Node? previousSibling;
      readonly attribute Node? nextSibling;

      attribute DOMString? nodeValue;
      attribute DOMString? textContent;
      Node insertBefore(Node node, Node? child);
      Node appendChild(Node node);
      Node replaceChild(Node node, Node child);
      Node removeChild(Node child);
  }
*/


/*
  interface Element : Node{
    readonly attribute DOMString tagName;
    attribute DOMString id;
    attribute DOMString className;
    readonly attribute DOMTokenList classList;
    boolean hasAttributes();
    readonly attribute NamedNodeMap attributes;
    sequence<DOMString> getAttributeNames();
    DOMString? getAttribute(DOMString qualifiedName);
    void setAttribute(DOMString qualifiedName, DOMString value);
    void setAttributeNS(DOMString? namespace, DOMString qualifiedName, DOMString value);
    void removeAttribute(DOMString qualifiedName);
    void removeAttributeNS(DOMString? namespace, DOMString localName);
    boolean hasAttribute(DOMString qualifiedName);
    boolean hasAttributeNS(DOMString? namespace, DOMString localName);
    Attr? getAttributeNode(DOMString qualifiedName);
    Attr? getAttributeNodeNS(DOMString? namespace, DOMString localName);
    Attr? setAttributeNode(Attr attr);
    Attr? setAttributeNodeNS(Attr attr);
    Attr removeAttributeNode(Attr attr);
    HTMLCollection getElementsByTagName(DOMString qualifiedName);
    HTMLCollection getElementsByTagNameNS(DOMString? namespace, DOMString localName);
    HTMLCollection getElementsByClassName(DOMString classNames);
  }
*/


/*
  Rest parameters
  The rest parameter syntax allows us to represent an indefinite number
  of arguments as an array. In the example, we use the rest parameters
  to collect arguments from the second one to the end. We then multiply
  them by the first one. This example is using an arrow function, which
  is introduced in the next section.
*/
function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]


/*
  Defining getters and setters
  A getter is a method that gets the value of a specific property. A setter
  is a method that sets the value of a specific property. You can define
  getters and setters on any predefined core object or user-defined object
  that supports the addition of new properties. The syntax for defining
  getters and setters uses the object literal syntax.

  The following illustrates how getters and setters could work for a
  user-defined object o.
*/
var o = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2
  }
};

console.log(o.a); // 7
console.log(o.b); // 8
o.c = 50;
console.log(o.a); // 25

/*
  Iterator:
  An object is an iterator when it knows how to access items from a collection
  one at a time, while keeping track of its current position within that

  sequence. In JavaScript an iterator is an object that provides a next()
  method which returns the next item in the sequence. This method returns
  an object with two properties: done and value.

  Once created, an iterator object can be used explicitly by repeatedly calling next().
*/
function makeIterator(array){
    var nextIndex = 0;

    return {
       next: function(){
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    }
}

/*
  Once initialized, the next() method can be called to access
  key-value pairs from the object in turn:
*/
var it = makeIterator(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true


/*
  Difference between for...of and for...in
  The following example shows the difference between a for...of loop
  and a for...in loop. While for...in iterates over property names,
  for...of iterates over property values:
*/
let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs "3", "5", "7"
}

/*
  Iterables
  An object is iterable if it defines its iteration behavior, such
  as what values are looped over in a for..of construct. Some built-in
  types, such as Array or Map, have a default iteration behavior, while
  other types (such as Object) do not.

  In order to be iterable, an object must implement the @@iterator method,
  meaning that the object (or one of the objects up its prototype chain)
  must have a property with a Symbol.iterator key:

  User-defined iterables

  We can make our own iterables like this:
*/
var myIterable = {}
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...myIterable] // [1, 2, 3]



/*
  The yield keyword causes generator function execution to pause and the
  value of the expression following the yield keyword is returned to the
  generator's caller. It can be thought of as a generator-based version
  of the return keyword.

  The yield keyword actually returns an IteratorResult object with two
  properties, value and done. The value property is the result of
  evaluating the yield expression, and done is false, indicating that
  the generator function has not fully completed.
*/

/*
  JSON Vs object literal:

  The full JSON syntax is as follows:

  JSON = null
      or true or false
      or JSONNumber
      or JSONString
      or JSONObject
      or JSONArray

  JSONNumber = - PositiveNumber
            or PositiveNumber
  PositiveNumber = DecimalNumber
                or DecimalNumber . Digits
                or DecimalNumber . Digits ExponentPart
                or DecimalNumber ExponentPart
  DecimalNumber = 0
               or OneToNine Digits
  ExponentPart = e Exponent
              or E Exponent
  Exponent = Digits
          or + Digits
          or - Digits
  Digits = Digit
        or Digits Digit
  Digit = 0 through 9
  OneToNine = 1 through 9

  JSONString = ""
            or " StringCharacters "
  StringCharacters = StringCharacter
                  or StringCharacters StringCharacter
  StringCharacter = any character
                    except " or \ or U+0000 through U+001F
                 or EscapeSequence
  EscapeSequence = \" or \/ or \\ or \b or \f or \n or \r or \t
                or \u HexDigit HexDigit HexDigit HexDigit
  HexDigit = 0 through 9
          or A through F
          or a through f

  JSONObject = { }
            or { Members }
  Members = JSONString : JSON
         or Members , JSONString : JSON

  JSONArray = [ ]
           or [ ArrayElements ]
  ArrayElements = JSON
               or ArrayElements , JSON
             
*/
