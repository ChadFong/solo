angular.module('admin', [])

.controller('AdminController', function($scope, Inventory){
  $scope.missed = [];
  $scope.options = [
      {label: 'Receiving', value: 'Receiving'},
      {label: 'Cold Storage', value: 'ColdStorage'},
      {label: 'Dry Storage', value: 'DryStorage'},
      {label: 'Pack Out', value: 'PackOut'},
      {label: 'Kitchen', value: 'Kitchen'}
    ];
  $scope.getMissed = function(){
    $scope.missed = Inventory.pullData('Admin');
  };

  $scope.getMissed();
});

