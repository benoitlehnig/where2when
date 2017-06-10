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

	function HeaderController($scope,$firebaseAuth,$rootScope,$timeout) {
		$scope.auth = $firebaseAuth();
		$scope.firebaseUser = null;


		$scope.signIn = function(){
			var provider = new firebase.auth.GoogleAuthProvider();
	        $scope.auth.$signInWithPopup(provider)
	        .then(
	        	function(firebaseUser) {
	        		console.log(firebaseUser);
	            	$rootScope.firebaseUser = firebaseUser;
	            	$scope.firebaseUser= firebaseUser;
	         })
	        .catch(function(error) {
	           		$scope.error = error;
	        });
		};

		// any time auth state changes, add the user data to scope
	    $scope.auth.$onAuthStateChanged(function(firebaseUser) {
	      	if(firebaseUser !==null){
	      		console.log(firebaseUser);
	        	$rootScope.firebaseUser = firebaseUser;
	        	$scope.firebaseUser= firebaseUser;
	        	var profilePicUrl = firebaseUser.photoURL;
	        	$('#user-pic')[0].style.backgroundImage = 'url(' + (profilePicUrl || '/images/profile_placeholder.png') + ')';
	      	}	
	      	else{
	        
	        	$rootScope.firebaseUser = null;
	        	$timeout(function(){
              		$scope.$apply();
            	});
	      	}
	    });
	  }
}());