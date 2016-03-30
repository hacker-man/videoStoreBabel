// Defino el módulo "movieRent"
angular.module("movieRent", ['ngRoute']).config(
    ["$routeProvider", "paths", function ($routeProvider, paths){

        // Configuración de Route Provider
        $routeProvider.when(paths.login, {
            templateUrl: 'views/Login.html'
        }).when(paths.movies, {
            templateUrl: 'views/Movies.html'
        }).otherwise({
            templateUrl: 'views/404.html'
        })
    }]
);