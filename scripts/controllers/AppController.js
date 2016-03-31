angular.module("movieRent")
    .controller("AppController",["$scope","$location","paths",function($scope,$location,paths){
        var controller = this;
        controller.titles = {}
        controller.titles[paths.home] = "VideoClub";
        controller.titles[paths.movies] = "Rent a Movie";
        controller.titles[paths.rentMovies] = "Your movies";
        controller.titles[paths.uploadMovie] = "Upload a Movie";
        
        //scope init:
        $scope.model = {
            title: ""
        }
        //scope event listeners:
        $scope.$on("$locationChangeSuccess",function(evt,currentRoute){
            $scope.model.title = controller.titles[$location.path()] || "404 Not Found";
        });
    }]);