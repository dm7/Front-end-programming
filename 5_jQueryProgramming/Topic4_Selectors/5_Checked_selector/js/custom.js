$(document).ready(cbkF);

function cbkF(){

		/*
			$('input[type="radio"]:checked')
			    
		    	The :checked selector selects all checked checkboxes or radio buttons
		*/


	$('#btn1Submit').on('click', SubmitHandler1);
	$('#btn2Submit').on('click', SubmitHandler2);

	function SubmitHandler1(){
		
		var result = $('input[type="radio"]:checked');
		if(result.length > 0){
			$('#divResult1').html(result.val() + " is checked");
		}else{
			$('#divResult1').html("No radio button checked");
		}
	}

	function SubmitHandler2(){
		
		var result = $('input[type="checkbox"]:checked');
		if(result.length > 0){
			var resultString = result.length + " checkboxes checked <br>";
			result.each(function(){ resultString += $(this).val()  +"<br>"  });
			$('#divResult2').html(resultString);
		}else{
			$('#divResult2').html("No checkbox is  checked");
		}	
	}
}	