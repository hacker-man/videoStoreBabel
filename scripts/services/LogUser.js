angular.module("movieRent").service("LogUser", ["$window", function ($window) {

    this.setLogin = function(user) {
        // Guardar el usuario en memoria del navegador
        window.localStorage.setItem("user", user);
    };
    this.getLogin = function() {
        // Recuperamos el usuario guardado en el navegador
        // console.log (window.localStorage.getItem("user"));
        return window.localStorage.getItem("user");
    };
    this.isLogin = function() {
        var user = window.localStorage.getItem("user") || "";
        if (user == "") {
            return false;
        } else {
            return true;
        }
    }
}]);
