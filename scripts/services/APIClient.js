angular.module("movieRent").service("APIClient", ["$http", "$q", "apiPaths", "URL",
function ($http, $q, apiPaths, URL){

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

        this.getMovie = function(movieID) {
            var url = URL.resolve(apiPaths.movieDetail, { id: movieID });
            return this.apiRequest(url);

        };

        this.createMovie = function (movie) {
            var deferred = $q.defer();
            movie.created_date = new Date();
            //movie.owner = LogUser.getLogin();
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