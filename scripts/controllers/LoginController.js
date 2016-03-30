angular.module("movieRent").controller("LoginController",
    ["$scope", "$window", "paths", function ($scope, $window, paths){


        $scope.model = {
            user: "",
            pass: ""
        };

        $scope.next = function(){
            console.log($scope);
            if ($scope.model.user != "" && $scope.model.pass != ""){
                 //= "#/movies";
                 console.log("Estoy dentro", $scope.model.user, $scope.model.pass);
                 var url = "/#" + paths.movies;
                 $window.location.href = url; 
            }
        };
    }]
);