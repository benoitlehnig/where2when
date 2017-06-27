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

	function HeaderController($scope,$firebaseAuth,$rootScope,$timeout, $http) {
		$scope.auth = $firebaseAuth();
		$scope.firebaseUser = null;


		$scope.signIn = function(){
			var provider = new firebase.auth.GoogleAuthProvider();
			provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
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

		$scope.signOut = function(){
	        $scope.auth.$signOut();
 			//window.location.reload();
		};

		// any time auth state changes, add the user data to scope
	    $scope.auth.$onAuthStateChanged(function(firebaseUser) {
	      	if(firebaseUser !==null){
	        	$rootScope.firebaseUser = firebaseUser;
	        	$scope.firebaseUser= firebaseUser;
	        	var profilePicUrl = firebaseUser.photoURL;
	        	$('#user-pic')[0].style.backgroundImage = 'url(' + (profilePicUrl || '/images/profile_placeholder.png') + ')';
	        	/*var id = $scope.firebaseUser.ie;
	        	var contacts = $http.get('https://www.googleapis.com/plus/v1/people/' + $scope.firebaseUser.uid);
	        	console.log(contacts);*/
	        	$timeout(function(){
              		$scope.$apply();
            	});
	      	}	
	      	else{	        
	        	$rootScope.firebaseUser = null;
	        	$timeout(function(){
              		$scope.$apply();
            	});
	      	}
        	$rootScope.$broadcast("callDB");
	    });




	  }
}());