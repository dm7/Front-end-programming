$(document).ready(cbkF);

function cbkF(){
	//Attribute value comparison is case-sensitive
	$('div[title!="div1Title"]').css('border', '5px solid red');
	
	//Alike behaviour
	$('div:not([title!="div1Title"])').css('border', '5px solid red');

	//Check if attribute name contains 'title'
	$('div[title*="div1Title"]').css('border', '5px solid red');

	//Check if 'title' attribute value contains 'mySpan' and delimited by space
	$('div[title~="mySpan"]').css('border', '5px solid red');	

	//Check if 'title' attribute value equal to 'myTitle' or starting with 'myTitle' followed by hyphen
	$('div[title|="myTitle"]').css('border', '5px solid red');	

	//Check if 'title' attribute value starting with 'div'
	$('div[title^="div"]').css('border', '5px solid red');			

	//Check if 'title' attribute value ends with 'div'
	$('div[title$="div"]').css('border', '5px solid red');				
}