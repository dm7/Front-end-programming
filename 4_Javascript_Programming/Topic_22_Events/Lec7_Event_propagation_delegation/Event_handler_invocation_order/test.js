var f = function(){
	var eventHandler1 = function(event){
		this.style.backgroundColor = 'green';
	};

	var eventHandler2 = function(event){
		this.style.backgroundColor = 'blue';
	};

	var div = document.getElementsByTagName('div')[0];
	div.addEventListener('click', eventHandler1, false);
	div.addEventListener('click', eventHandler2, false);
	
}

document.addEventListener('DOMContentLoaded', f, false);