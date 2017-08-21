var app = angular.module('formApp', []);

app.controller('MainCtrl', function ($scope) {
  $scope.user = {};

  $scope.userName = 'josue';
  $scope.nameFormat = /^[a-zA-Z]*$/;

  $scope.userEmail = 'email@example.com';
  $scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;

  $scope.userRFC = 'RIDB880901M31'
  $scope.rfcFormat = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;

});
