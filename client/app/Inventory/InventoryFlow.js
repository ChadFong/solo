angular.module('inventory', [])

.controller('InventoryController', function($scope, $location, Inventory){
  $scope.productData = {};
  $scope.data = [];
  $scope.url = $location.$$url.slice(1);
  $scope.transfer = {};

  $scope.addData = function(){
    Inventory.addProduct($scope.url ,
      {'product': $scope.productData.product,
       'count': $scope.productData.count,
       'units': $scope.productData.units});
    $scope.productData = {};
  };

  $scope.getData = function() {
    $scope.data = Inventory.pullData($scope.url);
  };

  $scope.submitTransfer = function(){
    console.log($scope.transfer);
  };

  $scope.transferToggle = function(index){
    $scope.transfer[index]= $scope.transfer[index] || this.x;
    $scope.transfer[index].active = !($scope.transfer[index].active);
  };

  $scope.getData();
});


