angular.module("movieRent")
    .controller("MoviesRentListController", ["$scope", "$log","$location","APIClient", "paths", "LogUser","URL",function ($scope, $log,$location,APIClient, paths, LogUser,URL) {
        //scope init:
        $scope.model = [];
        $scope.type = "rent";

        //Controller start:
        $scope.unRent = function (movie) {
            var detail= URL.resolve(paths.movieDetail,{id:movie.id});
            $location.url(detail);
        }

        $scope.uiState = 'loading';
        APIClient.getMovies().then(
            //Promesa resuelta:
            function (data) {
                $log.log("SUCCESS", data);
                for (var i in data) {
                    var movie = data[i];
                    if (movie.user_rent == LogUser.getLogin())
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