/*
	offsetParent:
	Nearest ancestor having position non-static i.e.,
	absolute/relative/fixed
*/

var divList = document.getElementsByTagName('div')[0];
var blueDiv = divList[0];
var yellowDiv = divList[1];
var purpleDiv = divList[2];

console.log(blueDiv.offsetParent);
console.log(yellowDiv.offsetParent);
console.log(purpleDiv.offsetParent);

var d = document.getElementById('iAmFixed');
console.log(d.offsetParent); // null
console.log(document.body.offsetParent); // null
console.log(document.documentElement.offsetParent); //null