/*
	Map object

	ECMAScript 6 introduces a new data structure to map values to values. 
	A Map object is a simple key/value map and can iterate its elements 
	in insertion order

	The following code shows some basic operations with a Map. See also 
	the Map reference page for more examples and the complete API. You 
	can use a for...of loop to return an array of [key, value] for each iteration.

	> Object.getOwnPropertyNames(Map);
		["length", "name", "arguments", "caller", "prototype"]

	> Object.getOwnPropertyNames(Map.prototype);
		["constructor", "size", "get", "set", "has", "delete", "clear", 
							"forEach", "entries", "keys", "values"]
*/

var sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");

for (var [key, value] of sayings) {
  console.log(key + " goes " + value);
}
// "cat goes meow"
// "elephant goes toot"

/*
	Object and Map compared

	Traditionally, objects have been used to map strings to values. 
	Objects allow you to set keys to values, retrieve those values, 
	delete keys, and detect whether something is stored at a key. 
	Map objects, however, have a few more advantages that make them better maps.

    The keys of an Object are Strings, where they can be of any value for a Map.
    You can get the size of a Map easily while you have to manually 
    keep track of size for an Object.
    The iteration of maps is in insertion order of the elements.
    An Object has a prototype, so there are default keys in the map. 
    (this can be bypassed using map = Object.create(null)).

	These two tips can help you to decide whether to use a Map or an Object:

    	. Use maps over objects when keys are unknown until run time, and when all 
    	keys are the same type and all values are the same type.
    	
    	. Use objects when there is logic that operates on individual elements.
*/


