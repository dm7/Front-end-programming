$(document).on('ready' ,Handler);

function Handler(){
	/*
		.each() is used for jQuery colection
	*/
	var result = '';
	$('li')
		.each(function(index, DOMElement){   result += 'Index= ' + index + ", Value = " + $(DOMElement).text()  + '<br>' });
	$('#divResult').html(result);


	/*
		$.each() is used for javascript objects and arrays
	*/
	var intArray = [100, 200, 300, 400, 500];
	result = '';
	$.each(intArray, function(index, element){ result += 'Index= ' + index + ', Value=' + element + "<br>"; });
	$('#divResult').html(result);


	var jsObject = {
                'USA': 'Washington D.C.',
                'India': 'New Delhi',
                'UK': 'London',
                'Australia': 'Canberra'
            };
    result = '';
    $.each(jsObject, function(key, value){ result += 'Index= ' + key + ', Value=' + value + "<br>"; });
	$('#divResult').html(result);    
}