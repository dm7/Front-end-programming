$(document).on('ready', Handler);

	/*
		When method chaining works?
		
	*/

function Handler(){
	$('li')
		.css('color', 'blue')
		.attr('title', 'MyTitle');

	/* 
		When method chaning does not work? 

		$('li')
			.text() 
			.css('color', 'blue')
			.attr('title', 'MyTitle');	
	*/


	$('li')
		.text('MYVALUE')
		.css('color', 'blue')
		.attr('title', 'MyTitle');	
}