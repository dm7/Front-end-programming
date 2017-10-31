var myList = [{"name" : "abc", "age" : 50},
              {"age" : "25", "hobby" : "swimming"},
              {"name" : "xyz", "hobby" : "programming"}];

//Builds the html table out of myList
function buildHtmlTable(selector){
	var columns = addAllColumnHeaders(myList, selector);

	for(var i = 0; i < myList.length; i++){
		var row$ = $('<tr/>');
		for(var colIndex=0; colIndex < columns.length; colIndex++){
			var cellValue = myList[i][columns[colIndex]];
			if(cellValue == null){cellValue = '';}
			$row.append($('<td/>').html(cellValue));
		}
		$(selector).append(row$);
	}
	
}

function addAllColumnHeaders(myList, selector){
	var columnset = [];
	var headerTr$ = $(''<tr/>);

	for(var i=0; i < myList.length; i++){
		for( var key in myList[i]){
			if($.inArray(key in columnset) === -1){
				columnset.push(key);
				headerTr.append($('<th/>').html(key));  
			}
		}
	}
	$('selector').append(headerTr$);
	return columnset;
}