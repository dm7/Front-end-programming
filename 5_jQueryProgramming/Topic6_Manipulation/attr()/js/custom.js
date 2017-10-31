$(document).on('ready', Handler);

function Handler(){
	
		
	/* Retrieves the title attribute value of first element only*/
	alert($('div').attr('title'));



	/* Retrieve the title attribute value of all matching elements */
	$('div').each(function(){ alert($(this).attr('title'));   });



	/* Set the title attribute values for all matching elements */	
	$('div').attr('title', 'My new title');

	$('div').each(function(i, item){ $(this).attr('title', 'DIV' + (i+1) + 'Title');   });



	/*
		Approach1 - Set multiple attributes to matching elements using json object
	*/
	var config = {
		'title' : 'New DIV Title',
		'style' : 'border: 3px solid red',
		'name'  : 'MY DIV'
	};
	$('div').attr(config);

	var result = '';
	$('div').each(function(){ 
								result += 'title = ' + $(this).attr('title') + "<br>";  
								result += 'style = ' + $(this).attr('style') + "<br>";
								result += 'name  = ' + $(this).attr('name')  + "<br><br>";
							}
				);
	$('#resultSpan').html(result);
	


	/*
		Approach2 - Set multiple attributes to matching elements using json object
	*/
	$('div').attr({
		'title' : 'New DIV Title',
		'style' : 'border: 3px solid red',
		'name'  : 'MY DIV'
	});

	result = '';
	$('div').each(function(){ 
								result += 'title = ' + $(this).attr('title') + "<br>";  
								result += 'style = ' + $(this).attr('style') + "<br>";
								result += 'name  = ' + $(this).attr('name')  + "<br><br>";
							}
				);
	$('#resultSpan').html(result);

	/*
		Approach3 - Set multiple attributes to matching elements using method chaining
	*/
	$('div')
		.attr('title', 'New DIV Title')
		.attr('style', 'border: 3px solid red')
		.attr('name',  'MY DIV');


	/*
		how to remove atributes?
	*/
	result = "DIV elements with Title attribute = " + $('div[title]').length + '<br>';
	result += 'Removing title attribute <br>';
	$('div[title]').removeAttr('title');
	result += "DIV elements with Title attribute = " + $('div[title]').length;
	$('#resultSpan').html(result);
}