var app = angular.module("app", []);

function MyController(){
	this.msg= 'This is a message';
}
app.controller('emp', MyController);


function MsgDirective(){
	return{
		templateUrl: "my-info-msg.html"
	};
}
app.directive('myInfoMsg', MsgDirective);