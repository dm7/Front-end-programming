$(document).on('ready' ,Handler);

function Handler(){
	/*
		1) jQuery each method is used to iterate over the items in a collection.
		For each item in the collection the cb function is called.

		2)The index of the element and 	element itself is passed to the cb function.

	*/

	$('li').each(function(index, element){ alert(index + ':' + $(element).text()); });

	/*
		use 'this' keyword to refer the element in cb
	*/
	$('li').each(function(){  alert($(this).text());      });


	/*
		Q) how to break out of each method?
		A) return false
	*/
	$('li').each(function(){  
								if($(this).text() === 'UK'){
									return false;						      
								}
								alert($(this).text());
							}
							
				);

	/*
		Equivalent to imiplicit iteration in jQuery: $('li').css('color', 'red');
	*/
	$('li').each(function(){  $(this).css('color', 'red');	});


	/*
		Performance considerations:
		1) jQuery needs to search the DOM for div element with id=divResult,
			for each list item in the collection. Performance can be improved 
			by caching the divResult element.
		2) The DOM element is being updated on each iteration of the loop.
			To improve the performance build a string variable with the required
			data and then update the DOM element outside of the loop. This 
			ensures that DOM element is updated only once.		
	*/
	var resultString = ''
	$('li').each(function(){ resultString += $(this).text() + '<br>; });
	$('#divResult').text(resultString);
}