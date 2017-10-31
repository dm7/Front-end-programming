/*
	offsetLeft:
	The HTMLElement.offsetLeft read-only method returns 
	the number of pixels that the upper left corner of 
	the current element is offset to the left within 
	the HTMLElement.offsetParent node.

	offsetTop:
	The HTMLElement.offsetTop read-only property returns the 
	distance of the current element relative to the top of 
	the offsetParent node.

	offsetWidth:
	The HTMLElement.offsetWidth read-only property returns 
	the layout width of an element. Typically, an element's 
	offsetWidth is a measurement which includes the element 
	borders, the element horizontal padding, the element 
	vertical scrollbar (if present, if rendered) and the 
	element CSS width.

	offsetHeight:
	The HTMLElement.offsetHeight read-only property is the 
	height of the element including vertical padding and 
	borders, in pixels, as an integer.

*/

var divList = document.getElementsByTagName('div')[0];
var blueDiv = divList[0];
var yellowDiv = divList[1];
var purpleDiv = divList[2];

console.log(yellowDiv.offsetParent === blueDiv);
console.log(yellowDiv.offsetLeft);
console.log(yellowDiv.offsetWidth);