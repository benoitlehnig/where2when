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

      $rootScope.getColor = function() {
        if ($rootScope.applicationList && $rootScope.display && $rootScope.display.selectedApplication != -1) {
          $rootScope.display.mainColor = $rootScope.applicationList[$rootScope.display.selectedApplication].color;
          return $rootScope.display.mainColor;
        }
          $rootScope.display.mainColor = "#E64187";
          return "#E64187";
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