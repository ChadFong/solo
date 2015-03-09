angular.module('inventory', [])

.controller('InventoryController', function($scope){
  $scope.data = [{'product': 'Mandarins',
                  'count': 400,
                  'brand': 'Cuties'},
                 {'product': 'Potatoes, Russet',
                  'count': 800,
                  'brand': 'Potatoes, Inc.'}
                  ];
  console.log('loading Controller');
});

