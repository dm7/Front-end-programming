/*
	Number object
		
	>  window['Number']
		 
		 function Number() { [native code] }

    >  Object.getOwnPropertyNames(Number);

    	["length", "name", "arguments", "caller", "prototype", "MAX_VALUE", "MIN_VALUE", 
    	"NaN", "NEGATIVE_INFINITY", "POSITIVE_INFINITY", "MAX_SAFE_INTEGER", "MIN_SAFE_INTEGER", 
    	"EPSILON", "isFinite", "isInteger", "isNaN", "isSafeInteger", "parseInt", "parseFloat"]
	
	>  Object.getOwnPropertyNames(Number.prototype);

		["constructor", "toString", "toLocaleString", "valueOf", "toFixed", "toExponential", 
		"toPrecision"]

	The built-in Number object has properties for numerical 
	constants, such as maximum value, not-a-number, and infinity. 
	You cannot change the values of these properties and you use them as follows:
*/
var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;


/*
	Date object

	>  	window['Date']
	
			function Date() { [native code] }

	>	Object.getOwnPropertyNames(Date);

			["length", "name", "arguments", "caller", "prototype", "UTC", "parse", "now"]

	
	>	Object.getOwnPropertyNames(Date.prototype);

			["constructor", "toString", "toDateString", "toTimeString", "toLocaleString", 
			"toLocaleDateString", "toLocaleTimeString", "valueOf", "getTime", "getFullYear", 
			"getUTCFullYear", "getMonth", "getUTCMonth", "getDate", "getUTCDate", "getDay", 
			"getUTCDay", "getHours", "getUTCHours", "getMinutes", "getUTCMinutes", "getSeconds", 
			"getUTCSeconds", "getMilliseconds", "getUTCMilliseconds", "getTimezoneOffset", 
			"setTime", "setMilliseconds", "setUTCMilliseconds", "setSeconds", "setUTCSeconds", 
			"setMinutes", "setUTCMinutes", "setHours", "setUTCHours", "setDate", "setUTCDate", 
			"setMonth", "setUTCMonth", "setFullYear", "setUTCFullYear", "toGMTString", 
			"toUTCString", "getYear", "setYear", "toISOString", "toJSON"]		

	JavaScript does not have a date data type. However, you can use the Date object 
	and its methods to work with dates and times in your applications. The Date object 
	has a large number of methods for setting, getting, and manipulating dates. 
	It does not have any properties.

	JavaScript handles dates similarly to Java. The two languages have many of the 
	same date methods, and both languages store dates as the number of milliseconds 
	since January 1, 1970, 00:00:00.

	The Date object range is -100,000,000 days to 100,000,000 days relative to 01 January, 1970 UTC.

	To create a Date object:
*/

var dateObjectName = new Date("December 25, 1995");

/*
	The parameters in the preceding syntax can be any of the following:

    Nothing: creates today's date and time. For example, today = new Date();.
    A string representing a date in the following form: "Month day, year hours:minutes:seconds." 
    For example, var Xmas95 = new Date("December 25, 1995 13:30:00"). 
    If you omit hours, minutes, or seconds, the value will be set to zero.
    A set of integer values for year, month, and day. For example, var Xmas95 = new Date(1995, 11, 25).
    A set of integer values for year, month, day, hour, minute, and seconds. 
    For example, var Xmas95 = new Date(1995, 11, 25, 9, 30, 0);.
*/

/*
	Methods of the Date object

	The Date object methods for handling dates and times fall into these broad categories:

	    "set" methods, for setting date and time values in Date objects.
	    "get" methods, for getting date and time values from Date objects.
	    "to" methods, for returning string values from Date objects.
	    parse and UTC methods, for parsing Date strings.

	With the "get" and "set" methods you can get and set seconds, minutes, hours, day of the month, day of the week, months, and years separately. There is a getDay method that returns the day of the week, but no corresponding setDay method, because the day of the week is set automatically. These methods use integers to represent these values as follows:

	    Seconds and minutes: 0 to 59
	    Hours: 0 to 23
	    Day: 0 (Sunday) to 6 (Saturday)
	    Date: 1 to 31 (day of the month)
	    Months: 0 (January) to 11 (December)
	    Year: years since 1900

	For example, suppose you define the following date:
*/

var Xmas95 = new Date("December 25, 1995");

/*

	Then Xmas95.getMonth() returns 11, and Xmas95.getFullYear() returns 1995.

	The getTime and setTime methods are useful for comparing dates. 

	The getTime method returns the number of milliseconds since January 1, 1970, 00:00:00 for a Date object.

	For example, the following code displays the number of days left in the current year:

*/

var today = new Date();
var endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Set day and month
endYear.setFullYear(today.getFullYear()); // Set year to this year
var msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
var daysLeft = Math.round(daysLeft); //returns days left in the year

/*
	This above example creates a Date object named today that contains 
	today's date. It then creates a Date object named endYear and sets 
	the year to the current year. Then, using the number of milliseconds 
	per day, it computes the number of days between today and endYear, 
	using getTime and rounding to a whole number of days.
*/


/*
	The parse method is useful for assigning values from date strings to 
	existing Date objects. For example, the following code uses parse and 
	setTime to assign a date value to the IPOdate object:
*/
var IPOdate = new Date();
IPOdate.setTime(Date.parse("Aug 9, 1995"));





