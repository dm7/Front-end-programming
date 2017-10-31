var f = function(){
	var eventHandler1 = function(event){
		throw new Error("manual Error injection");
		this.style.backgroundColor = "red";
	};

	var eventHandler2 = function(event){
		this.style.backgroundColor = "blue";
	};

	var outerDiv = document.getElementById('outer');
	var innerDiv = document.getElementById('inner');
	
	innerDiv.addEventListener('click', eventHandler1, false);
	outerDiv.addEventListener('click', eventHandler2, false);
}

document.addEventListener('DOMContentLoaded', f, false);