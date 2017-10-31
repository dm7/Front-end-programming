$(document).on('ready' ,Handler);

function Handler(){
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

	$('#divResult').html(employeeJSON[0].firstName);
}
