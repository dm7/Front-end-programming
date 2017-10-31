$(document).ready(cbkF);

function cbkF(){

	/*
		Handling Checkbox group
	*/

	$('input[name="skills"]').on('click', ClickHandler1);
	$('input[name="cities"]').on('click', ClickHandler2);
	
	function ClickHandler1(){
		getCheckedBoxes('skills');			
	}

	function ClickHandler2(){
		getCheckedBoxes('cities');			
	}

	function getCheckedBoxes(groupName){
		var result = $('input[name="' + groupName + '"]:checked');
		if(result.length > 0){
			var resultString = result.length + " checkboxes checked <br>";
			result.each(function(){ resultString += $(this).val()  +"<br>"  });
			$('#div' + groupName).html(resultString);
		}else{
			$('#div' + groupName).html("No checkbox is  checked");
		}
	}
}	