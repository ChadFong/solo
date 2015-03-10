angular.module('inventory', [])

.controller('InventoryController', function($scope, $location, Inventory){
  $scope.productData = {};
  $scope.data = [];
  $scope.url = $location.$$url.slice(1);
  $scope.transfer = {};
  $scope.options = [
    {label: 'Receiving', value: 'Receiving'},
    {label: 'Cold Storage', value: 'ColdStorage'},
    {label: 'Dry Storage', value: 'DryStorage'},
    {label: 'Pack Out', value: 'PackOut'},
    {label: 'Kitchen', value: 'Kitchen'}
  ];

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
    var destination = $scope.selection + '_Incoming';
    var transfers = $scope.transfer;
    for(var product in transfers){
// Updates inventory count
      Inventory.updateInventory($scope.url, transfers[product].$id, {'count': transfers[product].count - transfers[product].amount});
// Adds outgoing product to destination's Incoming Area
      Inventory.transferInventory(destination, {
        'ID': transfers[product].$id,
        'product': transfers[product].product,
        'count': transfers[product].amount,
        'units': transfers[product].units
      });
    }
  };

  $scope.transferToggle = function(index){
    $scope.transfer[index]= $scope.transfer[index] || this.x;
    $scope.transfer[index].active = !($scope.transfer[index].active);
    $scope.transfer[index].amount=null;
    console.log($scope.transfer[index]);
  };

  $scope.getData();
});


