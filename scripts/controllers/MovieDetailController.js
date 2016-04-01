angular.module("movieRent").controller("MovieDetailController",
    ["$scope", "$routeParams", "$location", "$sce", "APIClient", "LogUser", "paths", 
    function ($scope, $routeParams, $location, $sce, APIClient, LogUser, paths){
        
        // Scope init
        $scope.model = {};

        $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
        }

        $scope.getOwerview = function(overview) {
            if (overview == ""){
                return "Not overview avaible";
            }
            else{
                return overview;
            }
        }

        // Control init
        APIClient.getMovie($routeParams.id).then(

            // película encontrada
            function(movie){
                $scope.model = movie;
                console.log("DATO", $scope.model.user_rent);
                if (movie.user_rent == LogUser.getLogin()){
                    // TODO: Hacer una vista para pelicula alquilada
                    $scope.$emit("viewMovie", $scope.model.title);
                }
                else{
                    $location.url(paths.notFound);
                }
            },

            // película rechazada
            function(error){
                $location.url(paths.notFound);
            }

        );
    }]
);