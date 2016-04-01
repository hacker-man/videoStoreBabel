angular.module("movieRent").directive("mediaItemList",function(){
  return {
      restrict:"AE",
      templateUrl:"views/movieItemList.html",
      scope:{
          model:"=items",
          type:"=",
          rent:"="
      }
  };  
});