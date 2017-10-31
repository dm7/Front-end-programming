$(document).on('ready' ,Handler);

function Handler(){
	var employeeJSON = {
		"Todd": {
			"firstName": "Todd",
			"lastName" : "Grover",
			"gender"   : "Male",
			"salary"   : 50000
		},
		"Sara": {
			"firstName": "Sara",
			"lastName" : "Baker",
			"gender"   : "Female",
			"salary"   : 40000
		}
	};

	$('#divResult').html(employeeJSON.Todd.salary);
	$('#divResult').html(employeeJSON.Sara.salary);
}
