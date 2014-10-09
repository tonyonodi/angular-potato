'use strict';

/**
 * @ngdoc function
 * @name potatoApp.controller:PhotosCtrl
 * @description
 * # PhotosCtrl
 * Controller of the potatoApp
 */
angular.module('potatoApp')
  .controller('PhotosCtrl', function ($scope) {
    $scope.random = "hello!";
    
    $scope.feedItems = [
      {
        "title": "foods",
        "link": "http://www.flickr.com/photos/rumali/15298494200/",
        "media": {"m": "http://farm3.staticflickr.com/2950/15298494200_a35426b65d_m.jpg"},
        "date_taken": "2014-04-12T13:07:10-08:00",
        "description": " <p><a href=\"http://www.flickr.com/people/rumali/\">RumAli<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/rumali/15298494200/\" title=\"Foods\"><img src=\"http://farm3.staticflickr.com/2950/15298494200_a35426b65d_m.jpg\" width=\"240\" height=\"180\" alt=\"Foods\" /><\/a><\/p> <p><\/p>",
        "published": "2014-10-09T08:25:22Z",
        "author": "nobody@flickr.com (RumAli)",
        "author_id": "65171012@N00",
        "tags": "old food sweet chub potato"
      },
      {
        "title": "Early Autumn Roasted-Vegetables & Chickpea Soup",
        "link": "http://www.flickr.com/photos/foodmoods/15292415920/",
        "media": {"m":"http://farm4.staticflickr.com/3941/15292415920_da0e8957d7_m.jpg"},
        "date_taken": "2014-10-01T15:45:52-08:00",
        "description": " <p><a href=\"http://www.flickr.com/people/foodmoods/\">Foodmoods<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/foodmoods/15292415920/\" title=\"Early Autumn Roasted-Vegetables &amp; Chickpea Soup\"><img src=\"http://farm4.staticflickr.com/3941/15292415920_da0e8957d7_m.jpg\" width=\"168\" height=\"240\" alt=\"Early Autumn Roasted-Vegetables &amp; Chickpea Soup\" /><\/a><\/p> <p>on foodmoods<\/p>",
        "published": "2014-10-08T15:43:15Z",
        "author": "nobody@flickr.com (Foodmoods)",
        "author_id": "58807539@N07",
        "tags": "autumn vegetables soup potato crisps roasted"
      }
    ];
  });
