angular.module("movieRent")
    .controller("MoviesListController", ["$scope", "APIClient", "$log", "paths", function ($scope, APIClient, $log, paths) {
        //scope init:
        $scope.model = [];
        $scope.type = "all";

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