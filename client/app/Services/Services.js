angular.module('inventory.services', ['firebase'])

.factory('Inventory', function ($firebaseArray) {
  var Inven = new Firebase('https://inventory-flow-ctrl.firebaseio.com/');

  var addProduct = function(location, product, data){
    Inven.child(location).child(product).set(data);
  };

  var pullData = function(location) {
    return $firebaseArray(Inven.child(location));
  };

  var updateInventory = function(location, product, updateObj){
    Inven.child(location).child(product).update(updateObj);
  };

  return {
    addProduct: addProduct,
    pullData: pullData,
    updateInventory: updateInventory
  };
});


/*

*/