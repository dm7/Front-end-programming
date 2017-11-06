var app14 = angular.module('app14', ['ngSanitize']);

function MainController($scope, $window, $location, $interval, $log, $filter, $exceptionHandler, $sanitize, $http, $timeout){
	this.greetUser = function(userName){
		$window.alert("Hello " + this.userName);
	}

	var self = this;
	self.scope = $scope;
	
	/****************$location service******/
	this.currURL = $location.absUrl();
	this.theProtocol = $location.protocol();
	this.currHost = $location.host();
	this.currPort = $location.port();
	$location.path("#/the/path");
	this.currPath = $location.path();
	$location.search("random=stuff");
	this.currSearch = $location.search();

	
	/****************$interval service*******/
	$interval(function(){
		var hour = new Date().getHours();
		var minutes = ('0' + new Date().getMinutes()).slice(-2);
		var seconds = ('0' + new Date().getSeconds()).slice(-2);

		self.time = hour + ":" + minutes + ":" + seconds;

	},1000);

	
	/****************$timeout service*******/
	$timeout(function(){ $scope.name = 'Everybody';}, 3000);


	/*
		$interval executes a callback repeatedly, while $timeout simply 
		delays the execution of a callback (doesn't repeat). So, no, 
		they're not the same. Additionally, it should be noted that 
		both of them are wrappers for window.setInterval and 
		window.setTimeout respectively.
	*/


	/*******************$log service***************/
	$log.info("Some information");
	$log.warn("Some warning");
	$log.error("Some error");
	$log.debug("Some debug");
	

	/*******************$filter service***************/
	this.name = 'John';
	this.formattedname = $filter('uppercase')(this.name);


	/************Using $exceptionHandler service*******/
	this.throwException = function(){
		try{
			throw new Error("Exception thrown");

		}catch(e){
			$exceptionHandler(e.message, "Caught Exception");
		}
	};

	
	/**************using $sanitize service*****/
	/*
		Sanitizes an html string by stripping all potentially dangerous tokens.
	*/
	this.badStuff = "";	
	self.scope.$watch("badStuff", function(value){
		self.htmlData = $sanitize(value);
	});

	
	/***** For $compile service ********/
	this.players = [
		{name: "Barry Bonds", avg: 0.298, hr: 762, obp: 0.444},
		{name: "Hank Aaron", avg: 0.305, hr: 755, obp: 0.374},
		{name: "Babe Ruth", avg: 0.342, hr: 714, obp: 0.474},
		{name: "Ted Williams", avg: 0.344, hr: 521, obp: 0.482}
	];

	

	/*********** Using $http service *****/
		this.getData = function(){
			$http
			.get("playerData.json")
			.success(function(data){
						this.players = data;
					})

		};	

}

app14.controller('mainCtrl', MainController);


/***** using $compile service ********/

app14.directive("getPlayerInfo", function($compile){
	return function(scope, element, attrs){
		var playerList ="<ul><li ng-repeat='player in o.players'>{{player.name}}</li></ul>";

		var listElement = angular.element(playerList);

		var compileFunction = $compile(listElement);
		compileFunction(scope);

		element.append(listElement);
	}
});