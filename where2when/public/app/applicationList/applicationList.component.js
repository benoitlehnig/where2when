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
		// >0 means it is a real application
		$rootScope.applicationList = [
			{
				id: 0,
				title: "YOP",
				icon: "YOP.png",
				color: "#FFB5A8",
				description: "Where are you going to eat ?",
				path: 'oneApplication/yop'
			},
			{
				id: 1,
				title: "PlanE",
				icon: "PlanE.png",
				color: "#A8E4FF",
				description: "Where are you going to travel ?"
			},
			{
				id: 2,
				title: "Mapikid",
				icon: "Mapikid.png",
				color: "#8EC63F",
				description: "Where are your children going to play ? With toilets not so far"
			},
			{
				id: -1,
				title: "Other ?",
				icon: "Other.png",
				color: "#E64187",
				description: "What do you want us to help you with ?"
			}
		];
	}

}());