$(document).on('ready' ,Handler);

function Handler(){
	
	/*
	var result = [];

		$('li')
			.each(function(index, element){  result.push($(element).text()); });
	    
	    alert(result);	
	*/

	alert(
			$('li')
				.map(function(index, element){  return $(element).text(); })
				.get() // will unwrap and return JS array
		);

	alert(
			$('li')
				.map(function(index, element){  return $(element).text(); })
				.get() // will unwrap and return JS array
				.join('|') // JS array join()  method

		);
	



		

}