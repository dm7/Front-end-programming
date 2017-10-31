$(document).on('ready' ,Handler);

function Handler(){
	/*
		To select all checked checkboxes or radio buttons, we use :checked
		selector.
		To select all selected options of a select element use :selected selector

		How to get selected single option text and value from snigle select drop down?
	*/
	$('#selectCountries').on('change', ChangeEventHandler);

	function ChangeEventHandler(){
		var selectedOptions = $('#selectCountries option:selected');
		if(selectedOptions.length > 0){
			var resultString = '';
			selectedOptions.each(function(){ resultString += 'Value= ' + $(this).val() + ' |  Text = ' + $(this).text() + '<br>';    });
			$('#divResult').html(resultString);	
		}
		
	}



}
