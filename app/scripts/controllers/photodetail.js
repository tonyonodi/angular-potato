'use strict';

/**
 * @ngdoc function
 * @name potatoApp.controller:PhotodetailCtrl
 * @description
 * # PhotodetailCtrl
 * Controller of the potatoApp
 */
angular.module('potatoApp')
  .controller('PhotoDetailCtrl', function ($scope, $routeParams) {
    $scope.photoId = $routeParams.photoId;
  });
