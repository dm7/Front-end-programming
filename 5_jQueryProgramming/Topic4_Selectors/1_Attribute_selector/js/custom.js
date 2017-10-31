$(document).ready(cbkF);

function cbkF(){
	$('[title]').css('border', '5px solid red');
	$('div[title]').css('border', '5px solid red');
	$('[title="div1Title"]').css('border', '5px solid red');
	
	//Both 'title' and 'style' attributes
	$('div[title][style]').css('border', '5px solid red');
	$('[title="div1Title"][style="background-color: red"]').css('border', '5px solid red');

	//Both 'title' or 'style' attributes
	$('div[title],[style]').css('border', '5px solid red');
	$('[title="div1Title"], [style="background-color: red"]').css('border', '5px solid red');
}