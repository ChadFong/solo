angular.module('inventory', [])

.controller('InventoryController', function($scope, Inventory){
  $scope.data = [{'product': 'Mandarins',
                  'count': 400,
                  'brand': 'Cuties'},
                 {'product': 'Potatoes, Russet',
                  'count': 800,
                  'brand': 'Potatoes, Inc.'}
                  ];
  $scope.productData = {};
  $scope.addData = function($){
    Inventory.addProduct({'product': $scope.productData.product,
                          'count': $scope.productData.count,
                          'brand': $scope.productData.brand});
    // $scope.data.push({'product': $scope.productData.product,
    //                   'count': $scope.productData.count,
    //                   'brand': $scope.productData.brand});
  };
});

