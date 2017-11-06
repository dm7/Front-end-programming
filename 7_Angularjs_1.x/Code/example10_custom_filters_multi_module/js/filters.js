var app9 = angular.module('weatherFilters', []);

app9.filter('raining', UnicodeFilter);

function UnicodeFilter(){
	return function(input){
		return input ? '\u2602' : '\u2600';
	}
}