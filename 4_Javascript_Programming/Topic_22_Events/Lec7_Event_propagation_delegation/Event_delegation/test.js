var f = function(){
	var eh = function(event){
		event.target.style.backgroundColor = 'blue';
	};

	window.addEventListener('click', eh, false);
};

document.addEventListener('DOMContentLoaded', f, false);