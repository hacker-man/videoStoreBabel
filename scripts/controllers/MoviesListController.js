angular.module("movieRent")
    .controller("MoviesListController", ["$scope", "$log", "$window", "$location", "$filter", "APIClient", "paths", "LogUser", function ($scope, $log, $window, $location, $filter, APIClient, paths, LogUser) {
        //scope init:
        $scope.model = [];
        $scope.type = "all";
        //controller methods:
        $scope.uiState = 'loading';
        $scope.rentMovie = function (movie) {
            movie.user_rent = LogUser.getLogin();
            movie.rent_date = $filter('date')(new Date(), 'yyyy-MM-dd');
            APIClient.modifyMovie(movie).then(
                function (movie) {
                    console.log("PELICULA ALQUILADA", movie);
                    $location.url(paths.home);
                },
                function (error) {
                    console.log("ERROR AL ALQUILAR PELICULA", error);
                }
            );
        }

        //Controller start:
        $scope.uiState = 'loading';
        APIClient.getMovies().then(
            //Promesa resuelta:
            function (data) {
                $log.log("SUCCESS", data);
                for (var i in data) {
                    var movie = data[i];
                    if (movie.user_rent == "") {
                        $scope.model.push(movie);
                    }
                }
                if ($scope.model.length == 0)
                    $scope.uiState = 'blank'
                else {
                    $scope.uiState = 'ideal'

                }
            },
            //Promesa rechazada:
            function (data) {
                $log.error("Error", data);
                $scope.uiState = 'error';
            }
        );
    }]);