angular.module('flowCtrl', [
  // 'inventory.services',
  'inventory',
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
    .when('/inventory', {
      templateUrl: '/App/Inventory/InventoryView.html',
      controller: 'InventoryController'
    });
});