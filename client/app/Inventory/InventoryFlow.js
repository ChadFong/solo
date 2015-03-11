angular.module('inventory', [])

.controller('InventoryController', function($scope, $location, Inventory){
  $scope.data = [];
  $scope.dataObj = {};
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
    Inventory.addProduct($scope.url, $scope.productData.product, {
      'product': $scope.productData.product,
      'count': $scope.productData.count,
      'units': $scope.productData.units
    });
    $scope.productData = {};
  };

  $scope.getData = function() {
    $scope.data = Inventory.pullData($scope.url);
    $scope.dataObj = Inventory.pullObj($scope.url);
    $scope.incoming = Inventory.pullData($scope.url + '_Incoming');
  };

  $scope.submitTransfer = function(){
    var destination = $scope.selection + '_Incoming';
    var transfers = $scope.transfer;
    for(var product in transfers){
      if(transfers[product].amount !== null  && transfers[product].amount > 0){

        Inventory.updateInventory($scope.url, transfers[product].product, {'count': transfers[product].count - transfers[product].amount});

        Inventory.addProduct(destination, transfers[product].product, {
          'product': transfers[product].product,
          'count': transfers[product].amount,
          'units': transfers[product].units,
          'runner': $scope.runner
        });
      }
    }
    $scope.transfer = {};
  };

  $scope.transferToggle = function(index){
    $scope.transfer[index]= $scope.transfer[index] || {'product': this.x.product,'count': this.x.count,'units': this.x.units};
    $scope.transfer[index].active = !($scope.transfer[index].active);
    $scope.transfer[index].amount=null;
  };

  $scope.acceptTransfer = function(){
    for(var i=0 ; i<$scope.incoming.length ; i++){
      var inboundProduct = $scope.incoming[i];
      var currInven;
      var staging = $scope.url + '_Incoming';

      if(inboundProduct.received){
        var missed = parseInt(inboundProduct.count) - inboundProduct.received;

        if($scope.dataObj[inboundProduct.product]){currInven = $scope.dataObj[inboundProduct.product].count;}
        else{currInven = 0;}
        console.log(currInven);

        // Log Received:
        Inventory.updateInventory($scope.url, inboundProduct.product, {
          'product': inboundProduct.product,
          'count': parseInt(inboundProduct.received, 10) + parseInt(currInven, 10),
          'units': inboundProduct.units
        });

        // Register Transaction:
        Inventory.addProduct(staging, inboundProduct.product, null);


        // Log Missed, if any
        if(missed > 0){
          Inventory.missedProd(inboundProduct.product, {
            'product': inboundProduct.product,
            'missed': missed,
            'runner': inboundProduct.runner,
            'time': Inventory.timestamp()
          });
        }
      }
    }
  };

  $scope.getData();
});


