angular.module("movieRent")
    .controller("MoviesListController", ["$scope", "APIClient", "$log", "paths", "URL", function ($scope, APIClient, $log, paths, URL) {
        //scope init:
        $scope.model = [];
        $scope.url = URL.resolve;
        $scope.type = "allMovies";
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
                $log.log("rent_user", data[1].owner);
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