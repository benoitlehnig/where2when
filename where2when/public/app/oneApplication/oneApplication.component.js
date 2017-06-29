(function () {
	'use strict';
	var app = angular.
	module('oneApplication', []).
	component('oneapplication',
		{
			templateUrl: 'app/oneApplication/oneApplication.template.html',
			controller: OneApplicationController
		}
	);

	function OneApplicationController($scope, $rootScope) {
		$rootScope.stepList = [
			{
				title: "What ?",
				description: "Give a name to the event"
			},
			{
				title: "Who ?",
				description: "Manage the group of concerned people"
			},
			{
				title: "Where ?",
				description: "Select some rules to define where it will happen",
				path: "where"
			},
			{
				title: "When ?",
				description: "Choose the date or periodicity of the event"
			}
		];

	}

}());