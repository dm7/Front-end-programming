$(document).ready(cbkF);

function cbkF(){

	/*
		1) $(:input) selects all input, textarea, select and button elements
		2) $(input)  selects elements with an input tag
		3) Performance is better in second case.
	*/
	$('input')
	.each(function(){ alert($(this).val());    });
	
	$(':input')
	.each(function(){ alert($(this).val());    });


	$(':input[type="text"]')
	.each(function(){ alert($(this).val());    });
}	