$(document).on('ready' ,Handler);

function Handler(){
	/*
		How to select all disabled elements?
	*/
	
	$(':disabled').css('border', '3px solid red')
	$('input:disabled').css('border', '3px solid red')
	$('input[type="text"]:disabled').css('border', '3px solid red')



	/*
		How to select all enabled elements?
	*/
	$(':enabled').css('border', '3px solid red');
	$('textarea:enabled').css('border', '3px solid red');

}
