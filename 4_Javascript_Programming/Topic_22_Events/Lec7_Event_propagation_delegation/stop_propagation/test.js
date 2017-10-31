var f = function(){
	var formEventHandler1 = function(event){
		this.style.backgroundColor = "orange";
		//event.stopPropagation();
		//event.stopImmediatePropagation();
	};

	var formEventHandler2 = function(event){
		this.style.borderRadius = "20px";
		//event.stopImmediatePropagation();
	};

	var divEventHandler = function(event){
		this.style.borderRadius = "20px";
		this.style.borderWidth = "4px";
		
	};

	var submitButton = document.getElementsByName('formSubmit')[0];
	var submitEventHandler = function(event){
		event.preventDefault(); //stop submission
	};

	submitButton.addEventListener('click', submitEventHandler, false);


	var formElement = document.getElementsByTagName('form')[0];
	formElement.addEventListener('click', formEventHandler1, false);
	formElement.addEventListener('click', formEventHandler2, false);

	var divElement = document.getElementsByTagName('div')[0];
	divElement.addEventListener('click', divEventHandler, false);
};


document.addEventListener('click', f, false);