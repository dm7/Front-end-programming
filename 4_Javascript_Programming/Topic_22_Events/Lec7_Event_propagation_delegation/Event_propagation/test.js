var f = function(){
	var divElement = document.getElementsByTagName('div')[0];

	var eventHandler = function(event){
		divElement.innerHTML = divElement.innerHTML +
								'type=' + event.type + '<br>' +
								'target=' + event.target + '<br>' +
								'currentTarget=' + event.currentTarget + '<br>' + '=======' + '<br>' ;
	};

	//divElement.addEventListener('click', eventHandler, false);
	document.addEventListener('click', eventHandler, false);
	window.addEventListener('click', eventHandler, false);
};

document.addEventListener('DOMContentLoaded', f, false);