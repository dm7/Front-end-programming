/*
	String object

	>	window['String']

			function String() { [native code] }

	>	Object.getOwnPropertyNames(String);
			
			["length", "name", "arguments", "caller", "prototype", "fromCharCode", "fromCodePoint", "raw"]
	
	>	Object.getOwnPropertyNames(String.prototype);
	
			["length", "constructor", "valueOf", "toString", "charAt", "charCodeAt", 
			"codePointAt", "concat", "endsWith", "includes", "indexOf", "lastIndexOf", 
			"localeCompare", "match", "normalize", "repeat", "replace", "search", "slice", 
			"split", "substring", "substr", "startsWith", "toLowerCase", "toLocaleLowerCase", 
			"toUpperCase", "toLocaleUpperCase", "trim", "trimLeft", "trimRight", "link", 
			"anchor", "fontcolor", "fontsize", "big", "blink", "bold", "fixed", "italics", 
			"small", "strike", "sub", "sup"]

	The String object is a wrapper around the string primitive data type.
*/
var s = new String("foo"); // Creates a String object
console.log(s); // Displays: { '0': 'f', '1': 'o', '2': 'o'}
typeof s; // Returns 'object'

/*
	You can call any of the methods of the String object on a string 
	literal value—JavaScript automatically converts the string literal 
	to a temporary String object, calls the method, then discards the 
	temporary String object. You can also use the String.length property 
	with a string literal.

	You should use string literals unless you specifically need to use a 
	String object, because String objects can have counterintuitive behavior. For example:
*/

var s1 = "2 + 2"; // Creates a string literal value
var s2 = new String("2 + 2"); // Creates a String object
eval(s1); // Returns the number 4
eval(s2); // Returns the string "2 + 2"

/*
	A String object has one property, length, that indicates the number 
	of characters in the string. For example, the following code assigns 
	x the value 13, because "Hello, World!" has 13 characters:
*/
var mystring = "Hello, World!";
var x = mystring.length;

/*
	Multi-line template strings

	Template strings are string literals allowing embedded expressions. 
	You can use multi-line strings and string interpolation features with them.

	Template strings are enclosed by the back-tick (` `) (grave accent) 
	character instead of double or single quotes. Template strings can 
	contain place holders. These are indicated by the Dollar sign and 
	curly braces (${expression}).
	
	Multi-lines

	Any new line characters inserted in the source are part of the template 
	string. Using normal strings, you would have to use the following syntax 
	in order to get multi-line strings:
*/
console.log("string text line 1\n\
string text line 2");
// "string text line 1
// string text line 2"


/* 
	To get the same effect with multi-line strings, you can now write:
*/
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"


/*
	Embedded expressions

	In order to embed expressions within normal strings, you would use the following syntax:
*/
var a = 5;
var b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."


/*
	Now, with template strings, you are able to make use of the syntactic 
	sugar making substitutions like this more readable:
*/
var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and\nnot ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."


/*
	Exercise
*/
var samp_str = "Here are some escaped character \" \\ \' \t \n";
document.write(samp_str);

var first_str = "First String";
var second_str = "Second String";

var combined = first_str + second_str;
document.write(combined + "<br>");
document.write("Length of string: " + combined.length + "<br>");
document.write("substring " + combined.substring(6, 12) + "<br>");
document.write("Last character: " + combined.charAt(combined.length - 1) + "<br>");
document.write("Index of T is: " + combined.indexOf('t') + "<br>");

//Type coersion
var str_var = "5";
var num_var = 10;

var total = num_var + str_var;
var mult_total = num_var * str_var;

document.write("5 + 10 = " + total + "<br>");
document.write("5 * 10 = " + mult_total + "<br>");

// Type conversion
total = num_var + Number(str_var);
document.write("5 + 10 = " + total + "<br>");

var num_var2 = String(num_var);
document.write(num_var + num_var +"<br>");
document.write(num_var + num_var2 + "<br>");

