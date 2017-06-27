(function () {
    /*global localStorage: true, console: true, $: true */
   'use strict';
    var myApp = angular.module('sampleApp', [
      'firebase',
      'header',
      'groupManagement',
      'whyApplications',
      'ngMaterial'
      ])
    .run(['$rootScope', '$timeout', function ($rootScope,$timeout) {

   		$rootScope.firebaseUser = null;
   	}])
   	.value('GoogleApp', {
	    apiKey: 'YOUR_API_KEY',
	    clientId: 'YOUR_CLIENT_ID',
	    scopes: [
	      'https://www.googleapis.com/auth/userinfo.profile'
	    ]
	 });
   
}());