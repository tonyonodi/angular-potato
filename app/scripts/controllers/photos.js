'use strict';

/**
 * @ngdoc function
 * @name potatoApp.controller:PhotosCtrl
 * @description
 * # PhotosCtrl
 * Controller of the potatoApp
 */

var getUrl = "http://localhost:8888/http://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&api_key=19125c0693fd4a10163b5fb92c2c37e8",
    cleanseResponse,
    processJSON;

// creates photo ID, processes date, truncates title text
processJSON = function( list ) {
    var i,
        link,
        dateString,
        tagString,
        dateObj,
        date, month, year, hours, minutes,
        prettyDateString,
        dateSuffix = { 1: "st", 2: "nd", 3: "rd", 21: "st", 22: "nd", 23: "rd", 31: "st"},
        monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        tagArray;

    for (i = 0; i < list.length; i++) {
        // retrieve from photo object
        link = list[i].link;
        dateString = list[i].date_taken;
        tagString = list[i].tags;

        // get unique photo identifier
        link = link.split("/");
        link = link[link.length - 2];
        list[i].id = link;

        // make pretty date
        dateObj = new Date(dateString);
        
        date = dateObj.getDate();
        date =  date + (dateSuffix[date] || "th");
        month = monthList[ dateObj.getMonth() ];
        year = dateObj.getFullYear();
        hours = dateObj.getHours();
        minutes = dateObj.getMinutes();

        prettyDateString = date + " " + month + " " + year + " at " + hours + ":" + minutes;

        list[i].pretty_date_taken = prettyDateString;

        tagArray = tagString.split(" ");

        list[i].tags = tagArray;

    }

    return list;
}

angular.module('potatoApp')
  .controller('PhotosCtrl', function ($scope, $http) {

    $http.get(getUrl).success(function(data, status, headers, config) {
        var processedJSON;

        processedJSON = processJSON(data.items);

        $scope.feedItems = processedJSON;
    }).error(function(data, status, headers, config) {
        console.log("ERROR");
    });

  });
