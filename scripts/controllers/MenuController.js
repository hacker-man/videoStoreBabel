angular.module("movieRent")
	.controller("MenuController", ["$scope", "$location", "paths",
	function ($scope, $location, paths) {
		//scope init
		$scope.model = {
			selectedItem: paths.home
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
	}
]);