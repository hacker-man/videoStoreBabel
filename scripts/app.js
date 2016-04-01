angular.module("movieRent", ["ngRoute","URL"])
    .config(["$routeProvider", "paths", function ($routeProvider, paths) {
            $routeProvider.when(paths.home, {
                templateUrl: "/views/login.html"
            }).when(paths.movies, {
                templateUrl: 'views/MoviesList.html'
            }).when(paths.rentMovies, {
                templateUrl: 'views/MoviesRentList.html'
            }).when(paths.contribMovies, {
                templateUrl: 'views/MoviesContribList.html'
            }).when(paths.uploadMovie, {
                templateUrl: 'views/uploadMovie.html'
            }).when(paths.movieDetail, {
                templateUrl: 'views/MovieDetail.html'
            }).otherwise({
                templateUrl: 'views/404.html'
            })
  }]
);