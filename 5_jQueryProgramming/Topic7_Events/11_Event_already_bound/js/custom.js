$(document).ready(Handler);
	
function Handler(){

	function ClickHandler(){
		alert('Button clicked');
	}

	var rawDOMElement = jQueryObject.get(0);

	var eventObject = $._data(rawDOMElement, 'events');
	if((eventObject !- undefined) && (eventObject.click != undefined)){
		alert('Click event already binded');
	}else{
		$('#btn').on('click', ClcikHandler);
	}
}