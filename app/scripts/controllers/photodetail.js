'use strict';

/**
 * @ngdoc function
 * @name potatoApp.controller:PhotodetailCtrl
 * @description
 * # PhotodetailCtrl
 * Controller of the potatoApp
 */

angular.module('potatoApp')
  .controller('PhotoDetailCtrl', function ($scope, $http, $routeParams) {
  	var idMatches;

  	idMatches = function(element) {
	  if ( element.id == $routeParams.photoId ) {
		return element;
	  }
	}

    $http.get(getUrl).success(function(data, status, headers, config) {
        var cleansedData,
            processedJSON,
            filteredList;

        processedJSON = processJSON(data.items);

		filteredList = processedJSON.filter(idMatches);

        $scope.photo = filteredList[0];
    }).error(function(data, status, headers, config) {
        console.log("ERROR");
    });
  });
