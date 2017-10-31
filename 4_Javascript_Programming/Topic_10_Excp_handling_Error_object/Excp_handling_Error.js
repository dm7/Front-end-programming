/*
	Exception handling statements

	You can throw exceptions using the throw statement and handle them 
	using the try...catch statements.

	    throw statement
	    try...catch statement

	Exception types

	Just about any object can be thrown in JavaScript. Nevertheless, 
	not all thrown objects are created equal. While it is fairly common 
	to throw numbers or strings as errors it is frequently more effective 
	to use one of the exception types specifically created for this purpose:


    ECMAScript exceptions (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#Fundamental_objects)
    DOMException (https://developer.mozilla.org/en-US/docs/Web/API/DOMException)
    DOMError (https://developer.mozilla.org/en-US/docs/Web/API/DOMError)

	throw statement

	Use the throw statement to throw an exception. When you throw an 
	exception, you specify the expression containing the value to be thrown:

		throw expression;

	You may throw any expression, not just expressions of a specific type. 
	The following code throws several exceptions of varying types:

*/

throw "Error2";   // String type
throw 42;         // Number type
throw true;       // Boolean type
throw {toString: function() { return "I'm an object!"; } };


// Create an object type UserException
function UserException(message) {
  this.message = message;
  this.name = "UserException";
}

// Make the exception convert to a pretty string when used as a string 
// (e.g. by the error console)
UserException.prototype.toString = function() {
  return this.name + ': "' + this.message + '"';
}

// Create an instance of the object type and throw it
throw new UserException("Value too high");


/*
	try...catch statement

 	The try...catch statement marks a block of statements to try, 
 	and specifies one or more responses should an exception be thrown. 
 	If an exception is thrown, the try...catch statement catches it.

	The try...catch statement consists of a try block, which contains 
	one or more statements, and zero or more catch blocks, containing 
	statements that specify what to do if an exception is thrown in 
	the try block. That is, you want the try block to succeed, and if 
	it does not succeed, you want control to pass to the catch block. 
	If any statement within the try block (or in a function called from
	within the try block) throws an exception, control immediately shifts 
	to the catch block. If no exception is thrown in the try block, the 
	catch block is skipped. The finally block executes after the try 
	and catch blocks execute but before the statements following the try...catch statement.

	The following example uses a try...catch statement. The example 
	calls a function that retrieves a month name from an array based 
	on the value passed to the function. If the value does not 
	correspond to a month number (1-12), an exception is thrown 
	with the value "InvalidMonthNo" and the statements in the 
	catch block set the monthName variable to unknown.
*/

function getMonthName(mo) {
  mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
  var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul",
                "Aug","Sep","Oct","Nov","Dec"];
  if (months[mo]) {
    return months[mo];
  } else {
    throw "InvalidMonthNo"; //throw keyword is used here
  }
}

try { // statements to try
  monthName = getMonthName(myMonth); // function could throw exception
}
catch (e) {
  monthName = "unknown";
  logMyErrors(e); // pass exception object to error handler -> your own function
}

/*
	The catch block

	You can use a catch block to handle all exceptions that may be generated in the try block.

		catch (catchID) {
		  statements
		}

	The catch block specifies an identifier (catchID in the preceding 
	syntax) that holds the value specified by the throw statement; 
	you can use this identifier to get information about the exception 
	that was thrown. JavaScript creates this identifier when the catch 
	block is entered; the identifier lasts only for the duration of 
	the catch block; after the catch block finishes executing, 
	the identifier is no longer available.

	For example, the following code throws an exception. When the 
	exception occurs, control transfers to the catch block.
*/
try {
  throw "myException"; // generates an exception
}
catch (e) {
  // statements to handle any exceptions
  logMyErrors(e); // pass exception object to error handler
}


/*
	
	The finally block

	The finally block contains statements to execute after the try 
	and catch blocks execute but before the statements following 
	the try...catch statement. The finally block executes whether 
	or not an exception is thrown. If an exception is thrown, the 
	statements in the finally block execute even if no catch block 
	handles the exception.

	You can use the finally block to make your script fail gracefully 
	when an exception occurs; for example, you may need to release a 
	resource that your script has tied up. The following example 
	opens a file and then executes statements that use the file 
	(server-side JavaScript allows you to access files). If an exception 
	is thrown while the file is open, the finally block closes the 
	file before the script fails
*/
openMyFile();
try {
  writeMyFile(theData); //This may throw a error
} catch(e) {  
  handleError(e); // If we got a error we handle it
} finally {
  closeMyFile(); // always close the resource
}


/*
	If the finally block returns a value, this value becomes the 
	return value of the entire try-catch-finally production, 
	regardless of any return statements in the try and catch blocks:
*/
function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch(e) {
    console.log(1);
    return true; // this return statement is suspended
                 // until finally block has completed
    console.log(2); // not reachable
  } finally {
    console.log(3);
    return false; // overwrites the previous "return"
    console.log(4); // not reachable
  }
  // "return false" is executed now  
  console.log(5); // not reachable
}

f(); // alerts 0, 1, 3; returns false


/*
	Overwriting of return values by the finally block also applies to 
	exceptions thrown or re-thrown inside of the catch block
*/
function f() {
  try {
    throw "bogus";
  } catch(e) {
    console.log('caught inner "bogus"');
    throw e; // this throw statement is suspended until 
             // finally block has completed
  } finally {
    return false; // overwrites the previous "throw"
  }
  // "return false" is executed now
}

try {
  f();
} catch(e) {
  // this is never reached because the throw inside
  // the catch is overwritten
  // by the return in finally
  console.log('caught outer "bogus"');
}










/*
	Utilizing Error objects

	Depending on the type of error, you may be able to use the 'name' 
	and 'message' properties to get a more refined message. 'name' 
	provides the general class of Error (e.g., 'DOMException' or 'Error'), 
	while 'message' generally provides a more succinct message than one 
	would get by converting the error object to a string.

	If you are throwing your own exceptions, in order to take advantage 
	of these properties (such as if your catch block doesn't discriminate 
	between your own exceptions and system ones), you can use the Error 
	constructor. For example:
*/

function doSomethingErrorProne () {
  if (ourCodeMakesAMistake()) {
    throw (new Error('The message'));
  } else {
    doSomethingToGetAJavascriptError();
  }
}


try {
  doSomethingErrorProne();
}
catch (e) {
  console.log(e.name); // logs 'Error'
  console.log(e.message); // logs 'The message' or a JavaScript error message)
}


