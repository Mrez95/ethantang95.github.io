'use strict';

var popUpApp = angular.module('popUpApp', []);

popUpApp.controller('popupFormCtrl', ['$scope', function($scope){
	$scope.isLogIn = false;
	$scope.showPopUp = false;

	$scope.showPopupSignup = function(){
		$scope.isLogIn = false;
		if(!$scope.showPopUp){
			$scope.showPopUp = true;
		}
	};
	$scope.showPopupLogIn = function(){
		$scope.isLogIn = true;	
		if(!$scope.showPopUp){
			$scope.showPopUp = true;
		}
	};
	
}]);
