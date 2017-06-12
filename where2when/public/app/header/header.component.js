(function () {
	'use strict';
	var app = angular.
	module('header', []).
	component('header',
		{
			templateUrl: 'app/header/header.template.html',
			controller: HeaderController 
		}
	);

	function HeaderController($scope) {};
}());