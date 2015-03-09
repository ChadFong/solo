angular.module('inventory', [])

.controller('InventoryController', function($scope, $location, Inventory){
  $scope.productData = {};
  $scope.data = [];
  $scope.url = $location.$$url;

  $scope.addData = function(){
    Inventory.addProduct($scope.url ,
      {'product': $scope.productData.product,
       'count': $scope.productData.count,
       'brand': $scope.productData.brand});
  };
  
  $scope.getData = function() {
    $scope.data = Inventory.pullData($scope.url);
  };

  $scope.getData();
});

