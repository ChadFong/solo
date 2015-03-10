angular.module('flowCtrl', [
  'firebase',
  'admin',
  'inventory.services',
  'inventory',
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
    .when('/Admin', {
      templateUrl: '/App/Admin/admin.html',
      controller: 'AdminController'
    })
    .otherwise({
      templateUrl: '/App/Inventory/InventoryView.html',
      controller: 'InventoryController'
    });
});