'use strict';

angular.module('app', [])
  .controller('MovieController', function($scope, $http) {
    $scope.$watch('search', function() {
      fetch();
    });

    $scope.search = "Sherlock Holmes";

    function fetch() {
      $http.get("https://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full&apikey=ec594335")
        .then(function(response) {
          $scope.details = response.data;
        });

      $http.get("https://www.omdbapi.com/?s=" + $scope.search)
        .then(function(response) {
          $scope.related = response.data;
        });
    }

    $scope.update = function(movie) {
      $scope.search = movie.Title;
    };

    $scope.select = function() {
      this.setSelectionRange(0, this.value.length);
    }
  });