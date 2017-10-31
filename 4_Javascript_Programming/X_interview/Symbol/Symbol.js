/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

/*
  Symbols in ES6
  ECMAScript 6 introduces a new primitive type: symbols. They are tokens 
  that serve as unique IDs. You create symbols via the factory function 
  Symbol() (which is loosely similar to String returning strings if 
  called as a function):
*/
let symbol1 = Symbol();

/*
  Symbols as property keys
  Symbols can be used as property keys:
*/
const MY_KEY = Symbol();
let obj = {};
    
obj[MY_KEY] = 123;
console.log(obj[MY_KEY]); // 123

/* A method definition can also have a computed key:*/
const FOO = Symbol();
let obj = {
    [FOO]() {
      return 'bar';
    }
};
console.log(obj[FOO]()); // bar

