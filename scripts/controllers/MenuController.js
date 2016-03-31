angular.module("movieRent")
	.controller("MenuController", ["$scope", "$location", "LogUser", "paths",
	function ($scope, $location, LogUser, paths) {
		//scope init
		$scope.model = {
			selectedItem: paths.movies,
			user: ""
		}
		$scope.paths = paths;
		//scope methods
		
		$scope.getClassForItem = function(item){
			if($scope.model.selectedItem == item){
				return "active";
			}else{
				return "";
			}
		}
		$scope.$on("$locationChangeSuccess", function(evt, currentRoute) {
			$scope.model.user = LogUser.getLogin();
			console.log($scope.model.user);
            $scope.model.selectedItem = $location.path();
        });
/*        $scope.$on("urlChange", function(evt, path){
        	console.log("WOLA", $scope.model.user);
            $scope.model.user = LogUser.getLogin();
            $scope.model.selectedItem = path;
        });*/
	}
]);