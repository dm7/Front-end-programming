var one, two, three;
var check = false;

var myGen = function*(){
  one = yield 1; // Here yield provides value '1' to gen.next() and does not assign value '1' to one.
  two = yield 2;
  three = yield 3;
  console.log(one, two, three);
  console.log('sham');
};
var gen = myGen(); // get the generator ready to run

var result1 = gen.next(); // Returns {value: 1, done: false}
var result2 = gen.next(); // Returns {value: 2, done: false}
var result3 = gen.next(); // Returns {value: 3, done: false}
var result4 = gen.next(); // Returns {value: undefined, done: true} and displays - undefined, undefined, undefined


gen = myGen(); // get the generator ready to run

var result5 = gen.next(); // Returns {value: 1, done: false} and value '6' is assigned to one
var result6 = gen.next(6); // Returns {value: 2, done: false} and value '7' is assigned to two
var result7 = gen.next(7); // Returns {value: 3, done: false} and value '8' is assigned to three
var result8 = gen.next(8);  // Returns {value: undefined, done: true} and displays - 6, 7, 8

function smartCode(generator) { //give me a generator function
  var gen = generator();//start up the generator
  var yieldedVal = gen.next().value;//get the first yielded value
  if(yieldedVal.then) { //is it a promise?
    //it's a promise!!!
    yieldedVal.then(gen.next);//wait for it to resolve, then pass the resolved value back in
  }
}
smartCode(myGen);