(function () {
	'use strict';
	var app = angular.
	module('applicationList', []).
	component('applicationlist',
		{
			templateUrl: 'app/applicationList/applicationList.template.html',
			controller: ApplicationlistController 
		}
	);

	function ApplicationlistController($scope, $rootScope) {
		$rootScope.applicationList = [
			{
				id: 0,
				title: "YOP",
				description: "Where are you going to eat ?",
				path: 'oneApplication/yop'
			},
			{
				id: 1,
				title: "PlanE",
				description: "Where are you going to travel ?"
			},
			{
				id: 2,
				title: "Mapikid",
				description: "Where are your children going to play ? With toilets not so far"
			},
			{
				id: -1,
				title: "Other ?",
				description: "What do you want us to help you with ?"
			},
			{
				id: -2,
				title: "",
				description: ". . ."
			}
		];
	}

}());