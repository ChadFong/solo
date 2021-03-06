angular.module('flowCtrl', [
  'firebase',
  'admin',
  'inventory.services',
  'inventory',
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/state1");

  $stateProvider
    .state('inventory', {
      url: '/:dest',
      templateUrl: '/App/Inventory/InventoryView.html',
      controller: 'InventoryController'
    })
    .state('admin', {
      url: '/admin',
      templateUrl: '/App/Admin/admin.html',
      controller: 'AdminController'
    });
});

/*
$stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "partials/state1.html"
    })
    .state('state1.list', {
      url: "/list",
      templateUrl: "partials/state1.list.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "partials/state2.html"
    })
    .state('state2.list', {
      url: "/list",
      templateUrl: "partials/state2.list.html",
      controller: function($scope) {
        $scope.things = ["A", "Set", "Of", "Things"];
      }
    });
*/