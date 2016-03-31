angular.module("movieRent")
    .controller("MoviesRentListController", ["$scope", "APIClient", "$log", "paths", function ($scope, APIClient, $log, paths, URL) {
        //scope init:
        $scope.model = [];
        $scope.url = URL.resolve;
		$scope.type = "rent";

        //Controller start:
        $scope.uiState = 'loading';
        APIClient.getMovies().then(
            //Promesa resuelta:
            function (data) {
                $log.log("SUCCESS", data);
                for (var i in data) {
                    var movie = data[i];
                    if (movie.user_rent == "Jesus")
                        $scope.model.push(movie);
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