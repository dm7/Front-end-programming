var f = function(){
	var eventHandler = function(event){
		var text = document.createTextNode(event.currentTarget + '--');
		document.body.appendChild(text);
	}; 

	var pwdElement = document.querySelector('input[type="password"]');
	
	/*
		focusin is focus, except that it bubbles
		focusout is blur, except that it bubbles
	*/

	pwdElement.addEventListener('focusin', eventHandler, false); //can bubble
	document.addEventListener('focusin', eventHandler, false);
	window.addEventListener('focusin', eventHandler, false);
	
	pwdElement.addEventListener('focusout', eventHandler, false);
	document.addEventListener('focusout', eventHandler, false);
	window.addEventListener('focusout', eventHandler, false);
};

window.addEventListener('load', f, false);