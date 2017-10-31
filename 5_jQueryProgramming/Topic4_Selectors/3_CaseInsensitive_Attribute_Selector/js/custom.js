$(document).ready(cbkF);

function cbkF(){
	$('div[title]')
			.filter(function(){ return $(this).attr('title').toLowerCase() === "divtitle" })
			.css('border', '3px solid red');

	$('div[title]')
			.filter(function(){ return (/Div/i).test($(this).attr('title'))             })
									   // RegExp('Div', 'i').test($(this).attr('title'))
			.css('border', '3px solid red');

	

}	