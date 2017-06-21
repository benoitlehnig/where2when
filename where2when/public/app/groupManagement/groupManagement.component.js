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

	function GroupManagementController($scope, $http, $rootScope,$timeout,$firebaseArray) {
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

		$http({
		    method: 'POST',
		    url: "sendMail.php",
		    data: "email=" + $scope.newGroup.people[0].email + "&groupName="+ $scope.newGroup.name,
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).then(
				function(response) {
					//First function handles success
					$scope.content = response.data;
					alert(response.data);
				}, function(response) {
					//Second function handles error
					$scope.content = "Something went wrong";
					console.log(response);
				}
			);
		};


	  }

}());