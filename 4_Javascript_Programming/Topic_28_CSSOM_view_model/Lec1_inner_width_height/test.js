/*
	Start with screen.width and screen.height. They contain 
	the total width and height of the user’s screen. These 
	dimensions are measured in device pixels because they 
	never change: they’re a feature of the monitor, and 
	not of the browser.
*/
console.log(screen.width);
console.log(screen.height);

/*
	The inner width and inner height of the browser window 
	is measured in CSS pixels.
*/
console.log(window.innerHeight);
console.log(window.innerWidth);


/*
	These parameters give the value of viewport reference
	For more info go thru info.doc
*/
console.log(window.pageXOffset);
console.log(window.pageYOffset);