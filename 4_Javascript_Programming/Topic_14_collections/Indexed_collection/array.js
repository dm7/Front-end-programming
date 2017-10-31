/*
	Array object

	An array is an ordered set of values that you refer to with a 
	name and an index. For example, you could have an array called 
	emp that contains employees' names indexed by their employee number. 
	So emp[1] would be employee number one, emp[2] employee number two, and so on.

	JavaScript does not have an explicit array data type. However, 
	you can use the predefined Array object and its methods to work 
	with arrays in your applications. The Array object has methods 
	for manipulating arrays in various ways, such as joining, reversing, 
	and sorting them. It has a property for determining the array 
	length and other properties for use with regular expressions.

	>	window['Array']
	
			function Array() { [native code] }

	>	Object.getOwnPropertyNames(Array);

			["length", "name", "arguments", "caller", "prototype", "isArray", "from", "of", "observe", "unobserve"]

	>	Object.getOwnPropertyNames(Array.prototype);

			["length", "constructor", "toString", "toLocaleString", 
			"join", "pop", "push", "reverse", "shift", "unshift", "slice", 
			"splice", "sort", "filter", "forEach", "some", "every", "map", 
			"indexOf", "lastIndexOf", "reduce", "reduceRight", "entries", 
			"keys", "copyWithin", "find", "findIndex", "fill", "concat", "includes"]	


	Creating an array

	The following statements create equivalent arrays:
*/
var arr = new Array(0, 1, 2, 3, 4);
var arr = Array(0, 1, 2, 3, 4);
var arr = [0, 1, 2, 3, 4]; //The bracket syntax is called an "array literal" or "array initializer."

document.write("[" + arr + "]" + "<br>");

/*
	To create an array with non-zero length, but without any items, 
	either of the following can be used:
*/
var arr = new Array(5);
var arr = Array(5);


document.write("[" + arr + "]" + "<br>");
document.write("array length: " + arr.length + "<br>");

/*
	Note : in the above code, arrayLength must be a Number. 
	Otherwise, an array with a single element (the provided value) 
	will be created. Calling arr.length will return arrayLength, 
	but the array actually contains empty (undefined) elements. 
	Running a for...in loop on the array will return none of the array's elements.
*/

/*
	In addition to a newly defined variable as shown above, 
	arrays can also be assigned as a property of a new or an existing object:
*/

var obj = {};
obj.prop = [0, 1, 2, 3, 4];
// OR
var obj = {prop: [0, 1, 2, 3, 4]}

document.write("[" + obj.prop + "]" + "<br>");



/*
	If you wish to initialize an array with a single element, 
	and the element happens to be a Number, you must use the 
	bracket syntax. When a single Number value is passed to the 
	Array() constructor or function, it is interpreted as an 
	arrayLength, not as a single element.
*/
var arr = [42];      // Creates an array with only one element:
                     // the number 42.

document.write("[" + arr + "]" + "<br>");

var arr = Array(42); // Creates an array with no elements
                     // and arr.length set to 42; this is
                     // equivalent to:
document.write("[" + arr + "]" +  "<br>");

var arr = [];
arr.length = 42;

document.write("[" + arr + "]" +  "<br>");


/*
	Calling Array(N) results in a RangeError, if N is a non-whole 
	number whose fractional portion is non-zero. The following 
	example illustrates this behavior.
*/
try{
	var arr = Array(9.3);  // RangeError: Invalid array length
}catch(e){
	document.write(e.name + "<br>");
	document.write(e.message + "<br>");
}


/*
	if you supply a non-integer value to the array operator in 
	the code above, a property will be created in the object 
	representing the array, instead of an array element.
*/
var arr = [];
arr[3.4] = "Oranges";
document.write(arr + "<br>");
document.write("array length " + arr.length + "<br>");                // 0
document.write("[" + Object.getOwnPropertyNames(arr) + "]");

/*
	You can also populate an array when you create it:
*/
var myVar = 20;
var myArray = new Array("Hello", myVar, 3.14159);
var myArray = ["Mango", "Apple", "Orange"]

/*
	Referring to array elements

	You refer to an array's elements by using the element's 
	ordinal number. For example, suppose you define the following array:
*/
var myArray = ["Wind", "Rain", "Fire"];

/*
	Above, You then refer to the first element of the array as myArray[0] 
	and the second element of the array as myArray[1]. The index 
	of the elements begins with zero.
*/


//Understanding length
var cats = [];
cats[30] = ['Dusty'];
document.write(cats.length + "<br>"); // 31

/*
	You can also assign to the length property. Writing a value 
	that is shorter than the number of stored items truncates 
	the array; writing 0 empties it entirely:
*/
var cats = ['Dusty', 'Misty', 'Twiggy'];
document.write(cats.length + "<br>"); // 3

cats.length = 2;
document.write(cats + "<br>"); // logs "Dusty,Misty" - Twiggy has been removed

cats.length = 0;
document.write(cats + "<br>"); // logs nothing; the cats array is empty

cats.length = 3;
document.write(cats + "<br>"); // [undefined, undefined, undefined]



/*
	Iterating over arrays

	A common operation is to iterate over the values of an array, 
	processing each one in some way. The simplest way to do this is as follows:
*/
var colors = ['red', 'green', 'blue'];
for (var i = 0; i < colors.length; i++) {
  document.write(colors[i] + "<br>");
}


/*
	If you know that none of the elements in your array evaluate 
	to false in a boolean context — if your array consists only 
	of DOM nodes, for example, you can use a more efficient idiom:
*/
var divs = document.getElementsByTagName('div');
for (var i = 0, div; div = divs[i]; i++) {
  document.write(div.innerHTML);
}


/*
	The forEach() method provides another way of iterating over an array:

	The function passed to forEach is executed once for every 
	item in the array, with the array item passed as the 
	argument to the function. Unassigned values are not 
	iterated in a forEach loop.
*/
document.write("********************" + "<br>");

var colors = ['red', 'green', 'blue'];

colors.forEach(function(color) {
  document.write(color + "<br>");
});


/*
	Note that the elements of array omitted when the array 
	is defined are not listed when iterating by forEach, 
	but are listed when undefined has been manually 
	assigned to the element:	
*/
var array = ['first', 'second', , 'fourth'];

// returns ['first', 'second', 'fourth'];
array.forEach(function(element) {
  document.write(element +"<br>");
});

if(array[2] === undefined) { 
	document.write('array[2] is undefined' + "<br>"); 
} // true

var array = ['first', 'second', undefined, 'fourth'];

// returns ['first', 'second', undefined, 'fourth'];
array.forEach(function(element) {
  document.write(element + "<br>");
});


/*
	Array methods
	The Array object has the following methods:
	concat() joins two arrays and returns a new array.
*/

var myArray = new Array("1", "2", "3");
myArray = myArray.concat("a", "b", "c"); 
// myArray is now ["1", "2", "3", "a", "b", "c"]


/*
	join(deliminator = ',') joins all elements of an array into a string.
*/
var myArray = new Array("Wind", "Rain", "Fire");
var list = myArray.join(" - "); // list is "Wind - Rain - Fire"


/*
	push() adds one or more elements to the end of an array 
	and returns the resulting length of the array
*/
var myArray = new Array("1", "2");
myArray.push("3"); // myArray is now ["1", "2", "3"]



/*
	pop() removes the last element from an array and returns that element.
*/
var myArray = new Array("1", "2", "3");
var last = myArray.pop(); 
// myArray is now ["1", "2"], last = "3"



/*
	shift() removes the first element from an array and returns that element.
*/
var myArray = new Array ("1", "2", "3");
var first = myArray.shift(); 
// myArray is now ["2", "3"], first is "1"


/*
	unshift() adds one or more elements to the front of an array and 
	returns the new length of the array.
*/
var myArray = new Array ("1", "2", "3");
myArray.unshift("4", "5"); 
// myArray becomes ["4", "5", "1", "2", "3"]

/*
	slice(start_index, upto_index) extracts a section of an array 
	and returns a new array.
*/
var myArray = new Array ("a", "b", "c", "d", "e");
myArray = myArray.slice(1, 4); // starts at index 1 and extracts all elements
                               // until index 3, returning [ "b", "c", "d"]

/*
	splice(index, count_to_remove, addElement1, addElement2, ...) 
	removes elements from an array and (optionally) replaces them.
*/
var myArray = new Array ("1", "2", "3", "4", "5");
myArray.splice(1, 3, "a", "b", "c", "d"); 
// myArray is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was), 
// removed 3 elements there, and then inserted all consecutive
// elements in its place.


/*
	reverse() transposes the elements of an array: the first array 
	element becomes the last and the last becomes the first.
*/
var myArray = new Array ("1", "2", "3");
myArray.reverse(); 
// transposes the array so that myArray = [ "3", "2", "1" ]

/*
	sort() sorts the elements of an array.
*/
var myArray = new Array("Wind", "Rain", "Fire");
myArray.sort(); 
// sorts the array so that myArray = [ "Fire", "Rain", "Wind" ]

/*
	sort() can also take a callback function to determine how array 
	elements are compared. The function compares two values and 
	returns one of three values:

	For instance, the following will sort by the last letter of a string
*/
var sortFn = function(a, b){
  if (a[a.length - 1] < b[b.length - 1]) return -1;
  if (a[a.length - 1] > b[b.length - 1]) return 1;
  if (a[a.length - 1] == b[b.length - 1]) return 0;
}
myArray.sort(sortFn); 
// sorts the array so that myArray = ["Wind","Fire","Rain"]

/*
	indexOf(searchElement[, fromIndex]) searches the array for 
	searchElement and returns the index of the first match.
*/
var a = ['a', 'b', 'a', 'b', 'a'];
console.log(a.indexOf('b')); // logs 1
// Now try again, starting from after the last match
console.log(a.indexOf('b', 2)); // logs 3
console.log(a.indexOf('z')); // logs -1, because 'z' was not found

/*
	lastIndexOf(searchElement[, fromIndex]) works like indexOf, 
	but starts at the end and searches backwards.
*/
var a = ['a', 'b', 'c', 'd', 'a', 'b'];
console.log(a.lastIndexOf('b')); // logs 5
// Now try again, starting from before the last match
console.log(a.lastIndexOf('b', 4)); // logs 1
console.log(a.lastIndexOf('z')); // logs -1



/*
	forEach(callback[, thisObject]) executes callback on every array item.
*/
var a = ['a', 'b', 'c'];
a.forEach(function(element) { console.log(element);} ); 
// logs each item in turn


/*
	map(callback[, thisObject]) returns a new array of the return value 
	from executing callback on every array item.
*/
var a1 = ['a', 'b', 'c'];
var a2 = a1.map(function(item) { return item.toUpperCase(); });
console.log(a2); // logs A,B,C


/*
	filter(callback[, thisObject]) returns a new array containing 
	the items for which callback returned true
*/
var a1 = ['a', 10, 'b', 20, 'c', 30];
var a2 = a1.filter(function(item) { return typeof item == 'number'; });
console.log(a2); // logs 10,20,30

/*
	every(callback[, thisObject]) returns true if callback returns 
	true for every item in the array.
*/
function isNumber(value){
  return typeof value == 'number';
}
var a1 = [1, 2, 3];
console.log(a1.every(isNumber)); // logs true
var a2 = [1, '2', 3];
console.log(a2.every(isNumber)); // logs false

/*
	some(callback[, thisObject]) returns true if callback returns 
	true for at least one item in the array.
*/
function isNumber(value){
  return typeof value == 'number';
}
var a1 = [1, 2, 3];
console.log(a1.some(isNumber)); // logs true
var a2 = [1, '2', 3];
console.log(a2.some(isNumber)); // logs true
var a3 = ['1', '2', '3'];
console.log(a3.some(isNumber)); // logs false

/*
	The methods above that take a callback are known as iterative 
	methods, because they iterate over the entire array in some 
	fashion. Each one takes an optional second argument called 
	thisObject. If provided, thisObject becomes the value of 
	the this keyword inside the body of the callback function. 
	If not provided, as with other cases where a function is 
	invoked outside of an explicit object context, this will 
	refer to the global object (window).

	The callback function is actually called with three arguments. 
	The first is the value of the current item, the second is its 
	array index, and the third is a reference to the array itself.
	JavaScript functions ignore any arguments that are not named 
	in the parameter list so it is safe to provide a callback 
	function that only takes a single argument, such as alert.
*/

/*
	reduce(callback[, initialValue]) applies callback(firstValue, secondValue) 
	to reduce the list of items down to a single value
*/
var a = [10, 20, 30];
var total = a.reduce(function(first, second) { return first + second; }, 0);
console.log(total) // Prints 60


/*
	reduceRight(callback[, initalvalue]) works like reduce(), 
	but starts with the last element.
*/


/*
	Multi-dimensional arrays

	Arrays can be nested, meaning that an array can contain another 
	array as an element. Using this characteristic of JavaScript arrays, 
	multi-dimensional arrays can be created.

	The following code creates a two-dimensional array.
*/
var a = new Array(4);
for (i = 0; i < 4; i++) {
  a[i] = new Array(4);
  for (j = 0; j < 4; j++) {
    a[i][j] = "[" + i + "," + j + "]";
  }
}



document.write("********************");
