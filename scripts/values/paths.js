angular.module("movieRent").constant("paths", {
    home: "/",
    movies: "/movies",
    movieDetail: "/movies/:id", 
    rentMovies: "/movies/rent",
    contribMovies: "/movies/contrib",
    uploadMovie: "/movies/upload",
    notFound: "/not-found"
});