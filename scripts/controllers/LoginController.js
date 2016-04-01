angular.module("movieRent").controller("LoginController", 
    ["$scope", "$window", "LogUser", "paths", function ($scope, $window, LogUser, paths){


        $scope.model = {
            user: "",
            pass: ""
        };

        $scope.next = function(){
            if ($scope.model.user != "" && $scope.model.pass != ""){
                 console.log("Estoy dentro", $scope.model.user, $scope.model.pass);
                 LogUser.setLogin($scope.model.user);   
                 var url = "/#" + paths.movies;
                 $window.location.href = url; 
            }
        };
    }]
);