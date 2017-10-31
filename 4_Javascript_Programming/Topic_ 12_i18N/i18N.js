/*
	The Intl object is the namespace for the ECMAScript Internationalization API, 
	which provides language sensitive string comparison, number formatting, and 
	date and time formatting. The constructors for Collator, NumberFormat, and 
	DateTimeFormat objects are properties of the Intl object. This page documents 
	these properties as well as functionality common to the internationalization 
	constructors and other language sensitive functions.

	>	window['Intl']

			{
				Collator: function (),
				DateTimeFormat: function (),
				NumberFormat: function (),
				v8BreakIterator: function (),
				__proto__: Object.prototype
			}

	>	window['Intl']['Collator']
		
			function () { [native code] }

	>	Object.getOwnPropertyNames(window.Intl.Collator);
			
			["length", "name", "prototype", "supportedLocalesOf"]

	>	Object.getOwnPropertyNames(window.Intl.Collator.prototype);
			
			["constructor", "resolvedOptions", "compare"]
	
	>	Object.getOwnPropertyNames(window.Intl.DateTimeFormat);
			
			["length", "name", "prototype", "supportedLocalesOf"]

	>	Object.getOwnPropertyNames(window.Intl.DateTimeFormat.prototype);

			["constructor", "resolvedOptions", "format", "v8Parse"]

	>	Object.getOwnPropertyNames(window.Intl.NumberFormat);
			
			["length", "name", "prototype", "supportedLocalesOf"]
	
	>	Object.getOwnPropertyNames(window.Intl.NumberFormat.prototype);
			
			["constructor", "resolvedOptions", "format", "v8Parse"]


	Properties

	Intl.Collator
	    Constructor for collators, objects that enable language sensitive string comparison.
	Intl.DateTimeFormat
	    Constructor for objects that enable language sensitive date and time formatting.
	Intl.NumberFormat
	    Constructor for objects that enable language sensitive number formatting. 



	

*/

