angular.module("movieRent").service("APIClient", ["$http", "$q", "apiPaths", "URL",
function ($http, $q, apiPaths, URL) {

        this.apiRequest = function (url) {

            var deferred = $q.defer();

            $http.get(url).then(

                function (response) {
                    deferred.resolve(response.data);
                },

                function (response) {
                    deferred.reject(response.data);
                }
            );
            return deferred.promise;
        }

        this.getMovies = function () {
            return this.apiRequest(apiPaths.movies);

        };

        this.getMovie = function (movieId) {
            var url = URL.resolve(apiPaths.moviePlay, {
                id: movieId
            });
            return this.apiRequest(url);
        }

        this.createMovie = function (movie) {
            var deferred = $q.defer();
            $http.post(apiPaths.movies, movie).then(

                function (response) {
                    deferred.resolve(response.data);
                },
                function (response) {
                    deferred.reject(response.data);
                }
            );
            return deferred.promise;
        };
}


]);