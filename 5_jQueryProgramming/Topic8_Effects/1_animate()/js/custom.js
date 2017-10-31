$(document).ready(Handler);
	
function Handler(){
	$('#myButton').on('click', ClickHandler);
	function ClickHandler(){
		$('#myDiv').animate({
								'font-size': 50,
							}, 2000);
	}
}