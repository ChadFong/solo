angular.module('admin', [])

.controller('AdminController', function($scope){

  $scope.options = [
      {label: 'Receiving', value: 'Receiving'},
      {label: 'Cold Storage', value: 'ColdStorage'},
      {label: 'Dry Storage', value: 'DryStorage'},
      {label: 'Pack Out', value: 'PackOut'},
      {label: 'Kitchen', value: 'Kitchen'}
    ];

});

