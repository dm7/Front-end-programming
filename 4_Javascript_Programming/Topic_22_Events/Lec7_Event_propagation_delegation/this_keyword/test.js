var f = function(){
	var eventHandler = function(event){
		console.log(this.id);
	};

	var divList = document.getElementsByTagName('div');
	for(var i = 0; i < divList.length; i++){
		divList[i].addEventListener('click', eventHandler, false);
	}
}

document.addEventListener('DOMContentLoaded', f, false);