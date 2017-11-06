var app = angular.module("app", []);

function MyController(){
	this.msg= 'This is a message';
}
app.controller('emp', MyController);


function MsgDirective(){
	return{
		template: "<strong>{{o.msg}}</strong>"
	};
}
app.directive('myInfoMsg', MsgDirective);