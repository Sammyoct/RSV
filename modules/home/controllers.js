'use strict';

var app = angular.module('Home')

app.controller('HomeController',['$scope','$interval',function ($scope,$interval) {
$scope.theTime = new Date().toLocaleTimeString();
    $interval(function () {
        $scope.theTime = new Date().toLocaleTimeString();
    }, 1000);
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
    $scope.showIconData = '';
    $scope.tabData = function(str){
		  if(str == 0 || str == '' || str == undefined){
			  $scope.showIconData = 1; 
		  }
	  	  $scope.showIconData = str; 
	}
    $scope.showTable = '';
    $scope.searchPOStore = function(){
		//$scope.ajaxCall = getPOData()
		$scope.productData = [{"id":"1","product_name":"material1","product_note":"--","product_chk":"0","product_rate":"10"},
							  {"id":"2","product_name":"material2","product_note":"--","product_chk":"0","product_rate":"30"},
							  {"id":"3","product_name":"material3","product_note":"--","product_chk":"0","product_rate":"100"},
							  {"id":"4","product_name":"material4","product_note":"--","product_chk":"0","product_rate":"100"},
							  {"id":"5","product_name":"material5","product_note":"--","product_chk":"0","product_rate":"13"},
							  {"id":"6","product_name":"material6","product_note":"--","product_chk":"0","product_rate":"14"},
							  {"id":"7","product_name":"material7","product_note":"--","product_chk":"0","product_rate":"16"},
							  {"id":"8","product_name":"material8","product_note":"--","product_chk":"0","product_rate":"50"},
							  {"id":"9","product_name":"material9","product_note":"--","product_chk":"0","product_rate":"60"},
							  {"id":"10","product_name":"material10","product_note":"--","product_chk":"0","product_rate":"510"},
							  {"id":"11","product_name":"material11","product_note":"--","product_chk":"0","product_rate":"110"},
							  {"id":"12","product_name":"material12","product_note":"--","product_chk":"0","product_rate":"120"}
							 ];	
		$scope.showTable = 1;
	}
	$scope.showCheckList = 0;
	$scope.generateGRN = function(){
		$scope.productData = [{"id":"1","product_name":"material1","product_note":"--","product_chk":"0","product_rate":"10"},
							  {"id":"2","product_name":"material2","product_note":"--","product_chk":"0","product_rate":"30"},
							  {"id":"3","product_name":"material3","product_note":"--","product_chk":"0","product_rate":"100"},
							  {"id":"4","product_name":"material4","product_note":"--","product_chk":"0","product_rate":"100"},
							  {"id":"5","product_name":"material5","product_note":"--","product_chk":"0","product_rate":"13"},
							  {"id":"6","product_name":"material6","product_note":"--","product_chk":"0","product_rate":"14"},
							  {"id":"7","product_name":"material7","product_note":"--","product_chk":"0","product_rate":"16"},
							  {"id":"8","product_name":"material8","product_note":"--","product_chk":"0","product_rate":"50"},
							  {"id":"9","product_name":"material9","product_note":"--","product_chk":"0","product_rate":"60"},
							  {"id":"10","product_name":"material10","product_note":"--","product_chk":"0","product_rate":"510"},
							  {"id":"11","product_name":"material11","product_note":"--","product_chk":"0","product_rate":"110"},
							  {"id":"12","product_name":"material12","product_note":"--","product_chk":"0","product_rate":"120"}
							 ];	
		$scope.showCheckList = 1;
	}
}]);