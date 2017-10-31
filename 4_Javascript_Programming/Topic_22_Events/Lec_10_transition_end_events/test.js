var f = function(){
	var clickEventHandler = function(event){
		this.classList.toggle('sizeChange');
	};
	
	var transitionEventHandler = function(event){
		console.log(event.propertyName);
		console.log(event.elapsedTime);
		var imageElement = document.getElementsByTagName('img')[0];
		imageElement.style.transform = 'rotate(90deg)';
	};

	var divElement = document.getElementsByTagName('div')[0];
	divElement.addEventListener('click', clickEventHandler, false);
	divElement.addEventListener('transitionend', clickEventHandler, false);
};

window.addEventListener('load', f, false);