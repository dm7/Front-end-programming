/*
	The get syntax binds an object property to a function that will be called when that property is looked up.
	Syntax

	{get prop() { ... } }
	{get [expression]() { ... } }

	Parameters

	prop
	    The name of the property to bind to the given function.
	expression
	    Starting with ECMAScript 6, you can also use expressions for a computed property name to bind to the given function.

	Description

	Sometimes it is desirable to allow access to a property that returns a dynamically computed value, or you may want to reflect the status of an internal variable without requiring the use of explicit method calls. In JavaScript, this can be accomplished with the use of a getter. It is not possible to simultaneously have a getter bound to a property and have that property actually hold a value, although it is possible to use a getter and a setter in conjunction to create a type of pseudo-property.

	Note the following when working with the get syntax:

	    It can have an identifier which is either a number or a string;
	    It must have exactly zero parameters (see Incompatible ES5 change: literal getter and setter functions must now have exactly zero or one arguments for more information);
	    It must not appear in an object literal with another get or with a data entry for the same property ({ get x() { }, get x() { } } and { x: ..., get x() { } } are forbidden).

	A getter can be removed using the delete operator.
*/

/*
	This will create a pseudo-property latest for object obj, which will return the last array item in log.
	Note that attempting to assign a value to latest will not change it. 
*/
var log = ['test'];
var obj = {
  get latest () {
    if (log.length == 0) return undefined;
    return log[log.length - 1]
  }
}
console.log (obj.latest); // Will return "test".

/*
	If you want to remove the getter, you can just delete it:
*/
delete obj.latest;

/*
	To append a getter to an existing object later at any time, use Object.defineProperty().
*/
var o = { a:0 }

Object.defineProperty(o, "b", { get: function () { return this.a + 1; } });

console.log(o.b) // Runs the getter, which yields a + 1 (which is 1)


/*
	Computed properties are experimental technology, part of the 
	ECMAScript 6 proposal, and are not widely supported by browsers yet. 
	This will trigger a syntax error in non-supporting environments.

*/
var expr = "foo";

var obj = {
  get [expr]() { return "bar"; }
};

console.log(obj.foo); // "bar"

/*
	The set syntax binds an object property to a function to be called when there is an attempt to set that property.
	Syntax

	{set prop(val) { . . . }}
	{set [expression](val) { . . . }}

	Parameters

	prop
	    The name of the property to bind to the given function.

	val
	    An alias for the variable that holds the value attempted to be assigned to prop.
	expression
	    Starting with ECMAScript 6, you can also use expressions for a computed property name to bind to the given function.

	Description

	In JavaScript, a setter can be used to execute a function whenever a specified property is attempted to be changed. Setters are most often used in conjunction with getters to create a type of pseudo-property. It is not possible to simultaneously have a setter on a property that holds an actual value.

	Note the following when working with the set syntax:

	    It can have an identifier which is either a number or a string;
	    It must have exactly one parameter (see Incompatible ES5 change: literal getter and setter functions must now have exactly zero or one arguments for more information);
	    It must not appear in an object literal with another set or with a data entry for the same property.
	    ( { set x(v) { }, set x(v) { } } and { x: ..., set x(v) { } } are forbidden )

	A setter can be removed using the delete operator.
*/

/*
	This will define a pseudo-property current of object o that, when assigned a value, 
	will update log with that value:
*/
var o = {
  set current (str) {
    this.log[this.log.length] = str;
  },
  log: []
}

/* 
	Note that current is not defined and any attempts to access it will result in undefined.
*/

/*
	If you want to remove the setter, you can just delete it:
*/
delete o.current;

/*
	To append a setter to an existing object later at any time, use Object.defineProperty().
*/
var o = { a:0 };

Object.defineProperty(o, "b", { set: function (x) { this.a = x / 2; } });

o.b = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
console.log(o.a) // 5

/*
	Computed properties are experimental technology, part of the ECMAScript 6 
	proposal, and are not widely supported by browsers yet. This will trigger 
	a syntax error in non-supporting environments.
*/

var expr = "foo";

var obj = {
  baz: "bar",
  set [expr](v) { this.baz = v; }
};

console.log(obj.baz); // "bar"
obj.foo = "baz";      // run the setter
console.log(obj.baz); // "baz"
