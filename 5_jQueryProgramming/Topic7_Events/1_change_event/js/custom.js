$(document).on('ready', Handler);

function Handler(){
	$('#ddlCity').change(SelectChangeEventHandler);
	function SelectChangeEventHandler(){
		var selectedValue = $(this).val();
		if(selectedValue === 'Select')
			selectedValue = 'Please select';
		$('#divResult').html(selectedValue);
	}

	/* Selecting input elements only*/
	$('input').change(InputChangeEventHandler);
	var result = '';
	function InputChangeEventHandler(){
		if(result === ''){
			result = $(this).val();
		}else{
			result += ', ' + $(this).val();
		}
		$('#divResult').html(result);
	}

	/* Selecting all elements*/
	$('.inputRequired').change(InputChangeEventHandler);
	var result = '';
	function InputChangeEventHandler(){
		if(result === ''){
			result = $(this).val();
		}else{
			result += ', ' + $(this).val();
		}
		$('#divResult').html(result);
	}
}