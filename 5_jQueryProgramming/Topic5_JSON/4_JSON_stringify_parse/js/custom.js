$(document).on('ready' ,Handler);

function Handler(){
	
	/*
		JSON.stringify() converts a JSON object or JSON array into a string.
	*/

	var employeeJSON = [
		{
			"firstName": "Todd",
			"lastName" : "Grover",
			"gender"   : "Male",
			"salary"   : 50000
		},
		{
			"firstName": "Sara",
			"lastName" : "Baker",
			"gender"   : "Female",
			"salary"   : 40000
		}
	];

	var result = JSON.stringify(employeeJSON);
	$('#divResult').html(result);

	var jsonString = '[{"firstName":"Todd","lastName":"Grover","gender":"Male","salary":50000},{"firstName":"Sara","lastName":"Baker","gender":"Female","salary":40000}]';
	employeeJSON = JSON.parse(jsonString);
	result = '';
	$.each(employeeJSON, function(index, item){ result += 'First name = ' + item.firstName + '<br>';  });

	$('#divResult').html(result);
	
}
