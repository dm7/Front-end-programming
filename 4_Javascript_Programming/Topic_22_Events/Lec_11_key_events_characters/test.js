var f = function(){
	var inputElement = document.getElementById('textbox'),
		pElement 	 = document.getElementsByTagName('p')[0];

	inputElement.addEventListener('keypress', function(){pElement.textContent=inputElement.value.length;}, false);

};

window.addEventListener('load', f, false);