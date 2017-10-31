/*
	>	window['RegExp']

			function RegExp() { [native code] }
	
	>	Object.getOwnPropertyNames(RegExp);
			
			["length", "name", "arguments", "caller", "prototype", "input", "$_", 
			"multiline", "$*", "lastMatch", "$&", "lastParen", "$+", "leftContext", 
			"$`", "rightContext", "$'", "$1", "$2", "$3", "$4", "$5", "$6", "$7", "$8", "$9"]
	
	>	Object.getOwnPropertyNames(RegExp.prototype);
			
			["source", "global", "ignoreCase", "multiline", "lastIndex", "constructor", 
			"exec", "test", "toString", "compile"]
*/


/*
	Regular expression literal is a series of codes used to describe 
	a series of characters Just like you surround strings with quotes, 
	you surround a regex with slashes / 

	Regular expression literals provide compilation of the regular 
	expression when the script is loaded. When the regular expression 
	will remain constant, use this for better performance.
*/
var regPat = /ab+c/;

/*
	Or calling the constructor function of the RegExp object, as follows:
*/
var regPat = new RegExp("ab+c");

/*
	Using the constructor function provides runtime compilation of the 
	regular expression. Use the constructor function when you know the 
	regular expression pattern will be changing, or you don't know 
	the pattern and are getting it from another source, such as user input.
*/


/*
	String that starts with 1 to 5 Numbers, a space, 2 Uppercase letters, Word Boundary, 2 or more lowercase 
*/
var regPat = /[0-9]{1,5}\s[A-Z]{2}\b[a-z]{2,}/ 
var regPat = new RegExp(“\d{1,5}\s[A-Z]{2}\b[a-z]{2,}”);

var longStr= “Derek 123 Main St Pittsburgh 15457 (412)-555-5555 dbanas@newthinktank.com”;


// search gives the first index of matching reg Pattern
document.write(longStr.search(/[A-Za-z]{1,15}\s/) + “<br />”);


/*
	*  				- zero or more
	*? 				- zero or more (non-greedy)
	+  				- one or more
	+? 				- one or more (non-greedy)
	?  				- zero or one
	?? 				- zero or one (non-greedy) http://javascript.info/tutorial/greedy-and-lazy
	/b 				- Represents word boundary
	/d 				- Represents numbers
	/s 				- Represents space
	. 				– Represents any 1 character except a newline 
	[^0-9] 			– Represents anything that isn’t a number 
	\w 				– A-Z, a-z, 0-9, or _ 
	\W 				– Opposite of \w 
	\S 				– Opposite of \s 
	\D 				– Opposite of \d 
	\B 				– Anything that’s not a word boundary 
	[0-9]? 			– Represents zero to 1 numbers 
	[0-9]+ 			– Represents 1 or more numbers 
	[0-9]* 			– Represents 0 or more numbers 
	[Aa] 			– Represents 1 A or 1 a 
	[A-Za-z]{1, 15} - Upper case letters A-Z, lower case letters a-z, 1 to 15 in length
	^ 				– Represents the beginning of the string 
	$ 				– Represents the end of the string 
*/

document.write(longStr.search(/[A-Za-z0-9._-]+@[][A-Za-z0-9._-]+\.[A-Za-z]{2, 4}/) + "<br>");
document.write(longStr.replace(/\d{5}/, "55555") + "<br>");

/*
	/\d{4, 5/g 	- 	hrer g represents every single match of regPat in the given string
*/
var matchArray = longStr.match(/\d{4, 5/g);

var regexPat = /\d{3, 5}/;
document.write( (regexPat instanceof RegExp) + "<br>");

var regMatch = regexPat.exec(longStr);
document.write(regMatch + "<br>");

/*
	g – Represents a global or whole string search
	i – Represents a case insensitive search
	m – $ represents the end of the line or string whether it contains \n or not
*/
