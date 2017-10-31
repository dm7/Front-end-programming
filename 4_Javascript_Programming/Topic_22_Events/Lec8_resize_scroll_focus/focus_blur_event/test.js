var f = function(){
	var focusEventHandler = function(event){
		var divElement = document.getElementsByTagName('div')[0];
		divElement.style.backgroundColor = "brown";
	};

	var blurEventHandler = function(event){
		var divElement = document.getElementsByTagName('div')[0];
		divElement.style.backgroundColor = 'hsl(155, 100%, 30%)';
	};

	var textAreaElement = document.getElementsByTagName('textarea')[0];
	textAreaElement.addEventListener('focus', focusEventHandler, false); //does not bubble
	textAreaElement.addEventListener('blur', blurEventHandler, false); //does not bubble
};

document.addEventListener('DOMContentLoaded', f, false);