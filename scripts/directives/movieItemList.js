angular.module("moviedb").directive("mediaItemList",function(){
  return {
      restrict:"AE",
      templateUrl:"views/mediaItemList.html",
      scope:{
          model:"=items",
          getDetailUrl:"&"
      }
  };  
});