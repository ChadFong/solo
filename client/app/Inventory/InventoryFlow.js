angular.module('inventory', [])

.controller('InventoryController', function($scope){
  $scope.data = [{'product': 'Mandarins',
                  'count': 400,
                  'brand': 'Cuties'},
                 {'product': 'Potatoes, Russet',
                  'count': 800,
                  'brand': 'Potatoes, Inc.'}
                  ];
  $scope.productData = {};
  $scope.addData = function($){
    $scope.data.push({'product': $scope.productData.product,
                      'count': $scope.productData.count,
                      'brand': $scope.productData.brand});
  };
});

