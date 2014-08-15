var app = angular.module( "hashtag", [] );

app.controller(
    "AppController", ["$scope", "$interval",
    function( $scope, $interval ) {
        $interval(function(){
          $scope.tweets = window.searchArray}, 500);

    }]
);
