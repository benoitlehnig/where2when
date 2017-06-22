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

	function GroupManagementController($scope, $rootScope,$timeout,$firebaseArray, $http) {
		$scope.refListGroup = firebase.database().ref("groups");
		$scope.selectedGroupId = -1;
		$scope.groups = $firebaseArray($scope.refListGroup);
		$scope.newGroup = {
			name: "",
			people:
			[
			]
		};

		$scope.saveTheGroup = function(){
	    	if ($scope.selectedGroupId > -1) {
	    		delete $scope.groups[$scope.selectedGroupId].isUpdated
				$scope.groups.$save($scope.groups[$scope.selectedGroupId]);
			} else if ($scope.newGroup.name != "") {
				$scope.newGroup.admin = {
					id: $rootScope.firebaseUser.uid,
					name: $rootScope.firebaseUser.displayName
				};			
	    		delete $scope.newGroup.isUpdated;
				$scope.groups.$add($scope.newGroup);
				$scope.newGroup.name = "";
				$scope.selectedGroupId = $scope.groups.length;		
			}		    
		};

		$scope.addSomeone = function() {
		    var someone = $scope.someone;
		    if (someone && someone.email && someone.name) {
				$scope.someone = {}; // Do this to clean up the form fields
		    	if ($scope.selectedGroupId > -1) {
				    if ($scope.groups[$scope.selectedGroupId].people) {
				    	$scope.groups[$scope.selectedGroupId].people.push(someone);
				    } else {
				    	$scope.groups[$scope.selectedGroupId].people = [someone];
				    }
				    $scope.groups[$scope.selectedGroupId].isUpdated = true;
				} else {
					$scope.newGroup.people.push(someone);
				    $scope.newGroup.isUpdated = true;
				}
			}			
	    };
		$scope.removeSomeone = function(i) {
	    	if ($scope.selectedGroupId > -1) {
				$scope.groups[$scope.selectedGroupId].people.splice(i, 1);
		    	$scope.groups[$scope.selectedGroupId].isUpdated = true;
		    } else {
				$scope.newGroup.people.splice(i, 1);
		    	$scope.newGroup.isUpdated = true;
		    }
	    };

		$scope.deleteGroup = function(i) {
			var item = $scope.groups[i];
			$scope.groups.$remove(item);
		};

	    $scope.$on("callDB", function(){
		   $scope.groups = $firebaseArray($scope.refListGroup);
		   if ($rootScope.firebaseUser) {
			   $scope.newGroup.people = [{
			   	name: $rootScope.firebaseUser.displayName,
			   	email: $rootScope.firebaseUser.email
			   }];
			}
		});
	  }

}());