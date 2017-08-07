MovieApp.factory("MovieFactory", function ($http) {
    return {
        requestMovieIndex: function (callback) {
            var url = "http://localhost:60620/Movies/getMovies";

            $http({ method: 'GET', url: url, headers: { 'Content-Type': 'application/json' } })
                .success(function (data, status, headers, config) {
                    data = angular.fromJson(data);
                    callback(data);
                }).error(function (data, status, headers, config) { });
        }


    }



});
