var app8 = angular.module('app8', []);

function MainController(){
	this.students=[
		{name: "George Thomas", gpa: 3.5},
		{name: "Susy Smith", gpa: 3.6},
		{name: "Paul Marks", gpa: 3.2},
		{name: "Sue Edgar", gpa: 3.8}
	];

	this.student = 	{
		gpas:[
			{name: "George Thomas", gpa: 3.5},
			{name: "Susy Smith", gpa: 3.6},
			{name: "Paul Marks", gpa: 3.2},
			{name: "Sue Edgar", gpa: 3.8}
		]
	};

	this.currDate = new Date();

	this.randomStr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit augue in tortor tincidunt, sed hendrerit nulla aliquet. Donec at mauris ultrices, placerat arcu non, elementum erat. Vivamus sed eros vel turpis ultricies fermentum consequat in massa. Ut efficitur sit amet dui at ultrices. ";	

	this.randArray = [
		"Tomato",
		"Potato",
		"Bread",
		"Pickles",
		"Raisins"
	];

}	

app8.controller('mainCtrl', MainController);