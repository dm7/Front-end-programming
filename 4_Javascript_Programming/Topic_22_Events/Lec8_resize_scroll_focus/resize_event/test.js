var f = function(){
	var eventHandler = function(event){
		var divElement = document.getElementsByTagName('div')[0];
		divElement.innerHTML = 'W = ' + window.innerWidth +  "<br>" + 
								"H = " + window.innerHeight + "<br>" + 
								event.cancelable +   "<br>" + event.bubbles;

	};

	window.addEventListener('resize', eventHandler, false);
};

document.addEventListener('DOMContentLoaded', f, false);