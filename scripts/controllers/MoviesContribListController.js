angular.module("movieRent")
    .controller("MoviesContribListController",["$scope","$log","APIClient","paths","LogUser",function($scope,$log,APIClient,paths,LogUser){
        $scope.model = [];
        $scope.type = "contrib";

        //Controller start:
        $scope.uiState = 'loading';
        APIClient.getMovies().then(
            //Promesa resuelta:
            function (data) {
                $log.log("SUCCESS", data);
                for (var i in data) {
                    var movie = data[i];
                    if (movie.owner == LogUser.getLogin()){
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