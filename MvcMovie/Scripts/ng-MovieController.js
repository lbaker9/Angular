MovieApp.controller("moviecontroller", function ($scope, MovieFactory) {

    $scope.movieList = [];

    $scope.getMovies = function (callback) {
        MovieFactory.requestMovieIndex(callback);
    }

    $scope.GetMoviesCallback = function (response) {

       
        $scope.movieList = response;

    }

    $scope.getMovies($scope.GetMoviesCallback);

});