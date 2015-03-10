angular.module('inventory', [])

.controller('InventoryController', function($scope, $location, Inventory){
  $scope.data = [];
  $scope.incoming = [];

  $scope.url = $location.$$url.slice(1);
  $scope.options = [
    {label: 'Receiving', value: 'Receiving'},
    {label: 'Cold Storage', value: 'ColdStorage'},
    {label: 'Dry Storage', value: 'DryStorage'},
    {label: 'Pack Out', value: 'PackOut'},
    {label: 'Kitchen', value: 'Kitchen'}
  ];
  
  $scope.productData = {};
  $scope.transfer = {};

  $scope.addData = function(){
    var submission = {};
    submission[$scope.productData.product] = {
      'product': $scope.productData.product,
      'count': $scope.productData.count,
      'units': $scope.productData.units
    };
    Inventory.addProduct($scope.url, $scope.productData.product, {
      'product': $scope.productData.product,
      'count': $scope.productData.count,
      'units': $scope.productData.units
    });
    $scope.productData = {};
  };

  $scope.getData = function() {
    $scope.data = Inventory.pullData($scope.url);
    $scope.incoming = Inventory.pullData($scope.url + '_Incoming');
    console.log($scope.data);
  };

  $scope.submitTransfer = function(){
    var destination = $scope.selection + '_Incoming';
    var transfers = $scope.transfer;
    for(var product in transfers){
      // Only do transfer if there is an amount being transferred
      if(transfers[product].amount !== null  && transfers[product].amount > 0){
        // Updates inventory count
        Inventory.updateInventory($scope.url, transfers[product].$id, {'count': transfers[product].count - transfers[product].amount});
        // Adds outgoing product to destination's Incoming Area
        Inventory.transferInventory(destination, {
          'ID': transfers[product].$id,
          'product': transfers[product].product,
          'count': transfers[product].amount,
          'units': transfers[product].units,
          'runner': $scope.runner
        });
      }
    }
  };

  $scope.transferToggle = function(index){
    $scope.transfer[index]= $scope.transfer[index] || this.x;
    $scope.transfer[index].active = !($scope.transfer[index].active);
    $scope.transfer[index].amount=null;
  };

  $scope.acceptTransfer = function(){
    for(var i=0 ; i<incoming.length ; i++){
      //ID is different, we need to be able to identify by product.
      // Inventory.updateInventory($scope.url, );
    }
  };

  $scope.getData();
});


