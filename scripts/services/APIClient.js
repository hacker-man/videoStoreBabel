angular.module("movieRent").service("APIClient", ["$http", "$q", "$filter","apiPaths","LogUser",
function ($http, $q,$filter,apiPaths, LogUser){

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

        /*this.getMovie = function (movieId) {
            var url = URL.resolve(apiPaths.moviePlay, {
                id: movieId
            });
            return this.apiRequest(url);
        }*/

        this.createMovie = function (movie) {
            var deferred = $q.defer();
			movie.owner = LogUser.getLogin();
			movie.user_rent = "";
            movie.created_date =  $filter('date')(new Date(),'yyyy-MM-dd');
			movie.rent_date = "";
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