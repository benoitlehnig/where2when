(function () {
    /*global localStorage: true, console: true, $: true */
   'use strict';
    var myApp = angular.module('sampleApp', [
      'firebase',
      'header',
      'groupManagement',
      'applicationList',
      'oneApplication',
      'sign',
      'ngMaterial',
      'ngCss'
      ])
    .run(['$rootScope', '$timeout', function ($rootScope,$timeout) {

   		$rootScope.firebaseUser = null;

      // Default color
      $rootScope.display = {mainColor: "#E64187"};
      // Update color
      $rootScope.selectApplication = function(applicationId) {
        if ($rootScope.applicationList && applicationId != -1) {
          $rootScope.display.mainColor = $rootScope.applicationList[applicationId].color;
          $rootScope.display.selectedApplication = applicationId;
        } else {
          $rootScope.display.mainColor = "#E64187";
          $rootScope.display.selectedApplication = -1;
        }
      };

   	}])
   	.value('GoogleApp', {
	    apiKey: 'YOUR_API_KEY',
	    clientId: 'YOUR_CLIENT_ID',
	    scopes: [
	      'https://www.googleapis.com/auth/userinfo.profile'
	    ]
	 });
   
}());