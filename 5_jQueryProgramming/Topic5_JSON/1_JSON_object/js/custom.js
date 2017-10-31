$(document).on('ready' ,Handler);

function Handler(){
	var employeeJSON = {
		"firstName": "Todd",
		"lastName" : "Grover",
		"gender"   : "Male",
		"salary"   : 50000
	};

	var result = '';
	result += 'First Name = ' + employeeJSON.firstName + "<br>";
	result += 'Last Name  = ' + employeeJSON.lastName  + "<br>";	
	result += 'Gender     = ' + employeeJSON.gender    + "<br>";
	result += 'Salary     = ' + employeeJSON.salary    + "<br>";	

	$('#divResult').html(result);
}
