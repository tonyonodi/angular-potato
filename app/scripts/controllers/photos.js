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

// removes extraneous text from retrieved JSON string
cleanseResponse = function(response) {
    if ( response.indexOf("jsonFlickrFeed(") == -1 ) {
        return "unable to cleanse data"
    }

    return response.slice(15, -1)
}

// creates photo ID, processes date, truncates title text
processJSON = function( list ) {
    var i,
        link,
        dateString,
        dateObj,
        prettyDateString = "",
        date,
        month,
        year,
        hours,
        minutes,
        dateSuffix = {
            1: "st",
            2: "nd",
            3: "rd",
            21: "st",
            22: "nd",
            23: "rd",
            31: "st"
        },
        monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    for (i = 0; i < list.length; i++) {
        // retrieve from photo object
        link = list[i].link;
        dateString = list[i].date_taken;

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

    }

    return list;
}

angular.module('potatoApp')
  .controller('PhotosCtrl', function ($scope, $http) {

    $http.get(getUrl).success(function(data, status, headers, config) {
        var cleansedData,
            processedJSON;

        processedJSON = JSON.parse(cleanseResponse(data)).items;
        processedJSON = processJSON(processedJSON);

        $scope.feedItems = processedJSON;
    }).error(function(data, status, headers, config) {
        console.log("ERROR");
    });

  });
