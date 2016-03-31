angular.module("movieRent")
    .controller("MoviesContribListController",["$scope", "APIClient", "$log", "paths", "URL",function($scope, APIClient, $log, paths, URL){
        $scope.model = [];
        $scope.url = URL.resolve;
        $scope.type = "movieContrib"
        //scope methods:
        /*$scope.getMovieDetailURL = function(movie){
            return URL.resolve(paths.movieDetail,{id:movie.id});
        }*/

        //Controller start:
        $scope.uiState = 'loading';
        APIClient.getMovies().then(
            //Promesa resuelta:
            function (data) {
                $log.log("SUCCESS", data);
                for (var i in data) {
                    var movie = data[i];
                    if (movie.owner == "Lautaro") {
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
    }
]);