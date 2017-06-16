(function () {
	'use strict';
	var app = angular.
	module('groupManagement', []).
	component('groupmanagement',
		{
			templateUrl: 'app/groupManagement/groupManagement.template.html',
			controller: GroupManagementController 
		}
	);

	function GroupManagementController($scope,$rootScope,$timeout,$firebaseArray) {
		$scope.refListGroup = firebase.database().ref("groups");

		$scope.groups = $firebaseArray($scope.refListGroup);
		$scope.newGroup={
			people:[
				{people1: "toto@gmail.com"}
			]
		};

		$scope.createNewGroup = function(){
			$scope.newGroup.admin = $rootScope.firebaseUser.uid;
			$scope.groups.$add($scope.newGroup);
		};
	  }
}());