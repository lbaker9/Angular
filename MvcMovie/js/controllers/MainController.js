app.controller('MainController', ['$scope', function ($scope) {
    $scope.movie1 = {
        Title: "When Harry Met Sally",
        ReleaseDate: DateTime.Parse("1989-1-11"),
        Genre: "Romantic Comedy",
        Price: 7.99
    };

    $scope.movie2 = {
        Title: "Ghostbusters ",
        ReleaseDate: DateTime.Parse("1984-3-13"),
        Genre: "Comedy",
        Price: 8.99
    };

    $scope.movie3 = {
        Title: "Ghostbusters 2",
        ReleaseDate: DateTime.Parse("1986-2-23"),
        Genre: "Comedy",
        Price: 9.99
    };
}]);
