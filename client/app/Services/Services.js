angular.module('inventory.services', ['firebase'])

.factory('Inventory', function ($firebaseArray, $firebaseObject) {
  var Inven = new Firebase('https://inventory-flow-ctrl.firebaseio.com/');

  var addProduct = function(location, product, data){
    Inven.child(location).child(product).set(data);
  };

  var pullData = function(location) {
    return $firebaseArray(Inven.child(location));
  };

  var pullObj = function(location) {
    return $firebaseObject(Inven.child(location));
  };

  var updateInventory = function(location, product, data){
    Inven.child(location).child(product).update(data);
  };

  return {
    addProduct: addProduct,
    pullData: pullData,
    pullObj: pullObj,
    updateInventory: updateInventory
  };
});


/*

*/