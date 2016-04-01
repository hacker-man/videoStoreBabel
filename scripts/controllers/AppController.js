angular.module("movieRent")
    .controller("AppController",["$scope","$location","paths","LogUser",function($scope,$location,paths,LogUser){
    
        var controller = this;
        controller.titles = {}
        controller.titles[paths.home] = "VideoClub";
        controller.titles[paths.movies] = "Movies in rent";
        controller.titles[paths.rentMovies] = "Your movies rent";
        controller.titles[paths.uploadMovie] = "Upload a Movie";
        controller.titles[paths.contribMovies] = "Your movies contrib";
        
        //scope init:
        $scope.model = {
            title: "",
            user: ""
        }

        //scope event listeners:
        $scope.$on("$locationChangeSuccess", function(evt, currentRoute) {
            $scope.model.title = controller.titles[$location.path()] || "404 Not Found";
            if (!LogUser.isLogin()) {
                $location.url(paths.home);
            } else {
                $scope.model.user = LogUser.getLogin();
                if ($location.path() ==  paths.home){
                    $location.url(paths.movies);
                }
            }
        });

        $scope.$on("viewMovie", function (event, data) {
            $scope.model.title = data;
        });

        $scope.isAuth = function(){
             return LogUser.isLogin();
        };

        $scope.logout = function(){
            LogUser.setLogin("");
            $location.url(paths.home);
        };
    }]);

