var f = function(){
	var eventHandler = function(event){
		console.log(event.type);
		console.log(event.keyCode);
		console.log(String.fromCharCode(event.keyCode));
	};
	

	var textAreaElement = document.getElementsByTagName('textarea')[0];
	textAreaElement.addEventListener('keypress', eventHandler, false);
	textAreaElement.addEventListener('keydown', eventHandler, false);
	textAreaElement.addEventListener('keyup', eventHandler, false);
};

window.addEventListener('load', f, false);