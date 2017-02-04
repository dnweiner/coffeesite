'use strict';

angular.module('myModule', ['angular-animate','ui.bootstrap']);

// Declare app level module which depends on views, and components
var coffeesApp = angular.module('coffeesApp', [
	'ngRoute',
	'coffeesControllers'
]);

coffeesApp.config(['$routeProvider',
	function($routeProvider) {
	  $routeProvider.
		when('/coffees', {
		  templateUrl: 'coffees.html',
		  controller: 'CoffeesCtrl'
		}).
		when('/reviews/:coffeeId', {
		  templateUrl: 'reviews.html',
		  controller: 'ReviewsCtrl'
		}).
		otherwise({
		  redirectTo: '/coffees'
		});
}]);
