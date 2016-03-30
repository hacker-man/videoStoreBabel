angular.module("movieRent",["ngRoute","URL"])
    .config(["$routeProvider","paths", function ($routeProvider,paths){
        $routeProvider.when(paths.uploadMovie,{
            templateUrl: 'views/uploadMovie.html'
		})
  }]
);