var app = angular.module( "hashtag", [] );

app.controller(
    "AppController",
    function( $scope, $interval ) {
        $interval(function(){
          $scope.tweets = window.searchArray}, 500);



    }
);