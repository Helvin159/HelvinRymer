var mrRymer = angular.module('mrRymer', ['ngRoute']);

mrRymer.config(['$routeProvider', function ($routeProvider) {

	$routeProvider.when('/home', {
		templateUrl: 'views/home.html'
	}).when('/about', {
		templateUrl: 'views/about.html'
	}).otherwise({
		redirectTo: '/home'
	});

}]);
