var app = angular.module('devices',[])
app.controller('DeviceController',function($scope,$location){
    
    var hostName = $location.host();
	
	var port = $location.port();

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
   
   if(port != ''){
	var defaultUrl = "https://"+hostName+":"+port+"/cgi-bin/Pavilion/RestHandler.py";
   }else{
	var defaultUrl = "https://"+hostName+"/cgi-bin/Pavilion/RestHandler.py";
   }

   $scope.responseControllerData = $scope.ajaxCall(defaultUrl+"?ControllersDetails");
   
   if($scope.responseControllerData != undefined){
     $scope.controllerData = $scope.responseControllerData.Result;
   }else{
     $scope.controllerData = [];
   }
  
   $scope.responseDiskData = $scope.ajaxCall(defaultUrl+"?DisksDetails");
  
   if($scope.responseDiskData != undefined){
     $scope.disksData = $scope.responseDiskData.Result;
   }else{
     $scope.disksData = [];
   }
   
   $scope.responseVolumeData = $scope.ajaxCall(defaultUrl+"?VolumesDetails");
   
   if($scope.responseVolumeData != undefined){
     $scope.volumesData = $scope.responseVolumeData.Result;
   }else{
     $scope.volumesData = [];
   }

   $scope.responseHostData = $scope.ajaxCall(defaultUrl+"?HostsDetails");
   
   if($scope.responseHostData != undefined){
     $scope.hostsData = $scope.responseHostData.Result;   
   }else{
     $scope.hostsData = [];
   }
    
    $scope.tabClick = function(str){
        $scope.showControllerData = false;
        $scope.showDiskData = false;
        $scope.showVolumeData = false;
        $scope.showHostData = false;
        
        if(str == 'controller'){
            if($scope.controllerData.length > 1){
              $scope.showData($scope.controllerData[0],str);
            }
        }
        if(str == 'disk'){
            if($scope.disksData.length > 1){
              $scope.showData($scope.disksData[0],str);
            }
        }
        if(str == 'volume'){
            if($scope.volumesData.length > 1){
              $scope.showData($scope.volumesData[0],str);
            }
        }
        if(str == 'host'){
            if($scope.hostsData.length > 1){
              $scope.showData($scope.hostsData[0],str);
            }
        }
        
    };
    
    $scope.showData = function(obj,str){
        if(str == 'controller'){
            $scope.showControllerData = true;
            $scope.selectedControllerDevice = str;
            $scope.selectedControllerData = obj;
        }
        if(str == 'disk'){
            $scope.showDiskData = true;
            $scope.selectedDiskDevice = str;
            $scope.selectedDiskData = obj;
        }
        if(str == 'volume'){
            $scope.showVolumeData = true;
            $scope.selectedVolumeDevice = str;
            $scope.selectedVolumeData = obj;
        }
        if(str == 'host'){
            $scope.showHostData = true;
            $scope.selectedHostDevice = str;
            $scope.selectedHostData = obj;
        }
        
    };
    
    $scope.tabData = function(str){
      	  if(str == '2'){
    		$scope.showIconData = true; 
    	  }else{
    	   $scope.showIconData = false; 	  
    	  }  
	  }
    
    $scope.tabClick('controller');
	
    $scope.showIconData = true; 
 
});