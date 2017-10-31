$(document).ready(Handler);
	
function Handler(){
	var textBoxes = $('input[type="text"]');
	
	textBoxes.on('focus' FocusHandler);
	function FocusHandler(){
		var helpDivId = $(this).attr('id') + 'HelpDiv';
		$('#' + helpDivId).load('help.html #' + helpDivId);
	}

	textBoxes.on('blur' BlurHandler);
	function FocusHandler(){
		var helpDivId = $(this).attr('id') + 'HelpDiv';
		$('#' + helpDivId).html('');
	}
}