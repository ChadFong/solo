angular.module('flowCtrl', [
  'firebase',
  'inventory.services',
  'inventory',
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
    .when('/inventory', {
      templateUrl: '/App/Inventory/InventoryView.html',
      controller: 'InventoryController'
    })
    .otherwise({
      templateUrl: '/App/Inventory/InventoryView.html',
      controller: 'InventoryController'
    });
});