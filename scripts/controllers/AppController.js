angular.module("movieRent").controller("AppController", ["$scope", "$location", "$window", "paths", "LogUser", function ($scope, $location, $window, paths, LogUser) {

        $scope.model = {
            user: ""
        };

        $scope.$on("$locationChangeSuccess", function(evt, currentRoute) {
            if (!LogUser.isLogin()) {
                $window.location.href = "/#" + paths.login;
            } else {
                $scope.model.user = LogUser.getLogin();
                if (currentRoute == "http://localhost:8000/#" + paths.login){
                    $window.location.href = "/#" + paths.movies;
                }
            }
        });

        $scope.isAuth = function(){
             return LogUser.isLogin();
        };

        $scope.logout = function(){
            LogUser.setLogin("");
            $window.location.href = "/#" + paths.login;
        };
    }]
);
