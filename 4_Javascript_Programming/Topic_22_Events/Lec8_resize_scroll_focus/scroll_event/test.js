var f = function(){
	var eventHandler = function(event){
		var divElement = document.getElementsByTagName('div')[0];	
		divElement.innerHTML = 'X = ' + window.pageXOffset +  "<br>" + "Y = " + window.pageYOffset + "<br>";
		//divElement.innerHTML = 'X = ' + window.scrollX +  "<br>" + "Y = " + window.scrollY + "<br>";

	};
	
	window.addEventListener('scroll', eventHandler, false);
};

document.addEventListener('DOMContentLoaded', f, false);