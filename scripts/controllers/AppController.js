angular.module("movieRent")
    .controller("AppController",["$scope","$location","$window","paths","LogUser",function($scope,$location,$window,paths,LogUser){
    
        var controller = this;
        controller.titles = {}
        controller.titles[paths.home] = "VideoClub";
        controller.titles[paths.movies] = "Rent a Movie";
        controller.titles[paths.rentMovies] = "Your movies";
        controller.titles[paths.uploadMovie] = "Upload a Movie";
        
        //scope init:
        $scope.model = {
            title: "",
            user: ""
        }
        //scope event listeners:
        $scope.$on("$locationChangeSuccess", function(evt, currentRoute) {
            $scope.model.title = controller.titles[$location.path()] || "404 Not Found";
            if (!LogUser.isLogin()) {
                $window.location.href = "/#" + paths.home;
            } else {
                $scope.model.user = LogUser.getLogin();
                if (currentRoute == "http://localhost:8000/#" + paths.home){
                    $window.location.href = "/#" + paths.movies;
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

