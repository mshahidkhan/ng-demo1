var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'pages/main.html',
		controller: 'MainController'
	})
	.when('/second', {
		templateUrl: 'pages/second.html',
		controller: 'SecondController'
	});
	
});

myApp.service('nameService', ['$log', function ($log) {
	var self = this;
	this.name = 'Shahid Khan',
	this.namelength = function(){
		return self.name.length;
	}
}]);

myApp.controller('MainController',['$scope', '$log', 'nameService', function($scope, $log, nameService){
	$scope.title = "This is Main Controller";
	
	$scope.name = nameService.name; 

	$scope.$watch('name', function(){
			nameService.name = $scope.name;

	});

	$log.log(nameService.name);
	$log.log(nameService.namelength());

		
	
}]);


myApp.controller('SecondController', ['$scope', '$log', 'nameService', function($scope, $log, nameService){
	$scope.title = "This is Second Controller";
	$scope.name = nameService.name; 
	
	$scope.$watch('name', function(){
			nameService.name = $scope.name;

	});
	
	$log.log(nameService.name);
	$log.log(nameService.namelength());

	
}]);

myApp.directive('searchResult', [function () {
	return {
		restrict: 'ACE',
		templateUrl: '/templates/searchresult.html',
			replace: true	
	};
}])

