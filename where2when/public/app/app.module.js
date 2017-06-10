(function () {
    /*global localStorage: true, console: true, $: true */
   'use strict';
    var myApp = angular.module('sampleApp', ['firebase','header','ngMaterial'])
    .run(['$rootScope', '$timeout', function ($rootScope,$timeout) {

   		$rootScope.firebaseUser = null;
   	}]);
   
}());