angular.module("movieRent")
    .controller("AppController",["$scope","$location","$window","paths","LogUser",function($scope,$location,$window,paths,LogUser){
    
        var controller = this;
        controller.titles = {}
        controller.titles[paths.home] = "VideoClub";
        controller.titles[paths.movies] = "Movies in rent";
        controller.titles[paths.rentMovies] = "Your movies rent";
        controller.titles[paths.uploadMovie] = "Upload a Movie";
        controller.titles[paths.contribMovie] = "Your movies contrib";
        controller.titles[paths.movie] = "View a Trailer";
        
        //scope init:
        $scope.model = {
            title: "",
            user: ""
        }
        //scope event listeners:
        $scope.$on("$locationChangeSuccess", function(evt, currentRoute) {
            console.log("AppController");
            $scope.model.title = controller.titles[$location.path()] || "404 Not Found";
            if (!LogUser.isLogin()) {
                console.log("No autenticado");
                $window.location.href = "/#" + paths.home;
            } else {
                console.log("Autenticado")
                $scope.model.user = LogUser.getLogin();
                //console.log(currentRoute == "http://localhost:8000/#" + paths.home);
                if ($location.path() ==  paths.home){
                    console.log($location.path(), "redirigiendo)", paths.home);
                    $window.location.href = "/#" + paths.movies;
                    //$scope.$broadcast("urlChange", paths.movies);
                }
                else{
                    console.log($location.path());
                    //$scope.$broadcast("urlChange", $location.path());
                }
            }
        });

        $scope.isAuth = function(){
             return LogUser.isLogin();
        };

        $scope.logout = function(){
            LogUser.setLogin("");
            $window.location.href = "/#" + paths.home;
        };
    }]);

