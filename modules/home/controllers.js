'use strict';

var app = angular.module('Home')

app.controller('HomeController',['$scope',function ($scope) {

    $scope.ajaxCall = function(url) {
       var response = $.ajax({
            type: "GET",
            url: url,
            async:false,
            dataType: "json",
            success: function(data) {
                return data;
            }
        });
        return response.responseJSON;
    };
   
   var defaultUrl = "https://localhost/RestHandler.py";
	$scope.pono = '1';
	$scope.showPOData = false;
	$scope.searchPO = function(){
		$scope.pono = "test";
		//todo:replace dummy code with this
		/*$scope.responseData = $scope.ajaxCall(defaultUrl+"?"+$scope.pono);

		if($scope.responseControllerData != undefined){
		 $scope.controllerData = $scope.responseControllerData.Result;
		}else{
		 $scope.controllerData = [];
		}*/
		
		$scope.responseData = [];
		$scope.showData($scope.responseData,'pono',$scope.pono)
	}
    
    $scope.showData = function(obj,str,displayvalue){
        if(str == 'pono'){
            $scope.showPOData = true;
            $scope.selectedPOData = obj;
			$scope.displayValue=displayvalue;
        }
    };
    
    $scope.tabData = function(str){
      	  if(str == '2'){
    		$scope.showIconData = true; 
    	  }else{
    	   $scope.showIconData = false; 	  
    	  }  
	  }
    
    
    $scope.showIconData = true; 
 
}]);