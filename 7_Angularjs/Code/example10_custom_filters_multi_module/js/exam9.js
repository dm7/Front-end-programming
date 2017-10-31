var app8 = angular.module('app9', ['weatherFilters']);

function MainController(){
	this.weather = [
		{day: 'Monday', rain: false},
		{day: 'Tuesday', rain: true}
	];
}	

app8.controller('mainCtrl', MainController);