angular.module('inventory.services', ['firebase'])

.factory('Inventory', function ($firebaseArray) {
  var Inven = new Firebase('https://inventory-flow-ctrl.firebaseio.com/');

  var addProduct = function(location, data){
    Inven.child(location).push(data);
  };

  var pullData = function(location) {
    return $firebaseArray(Inven.child(location));
  };

  var transferInventory = function(location, data){
    Inven.child(location).push(data);
  };

  var updateInventory = function(location, id, updateObj){
    Inven.child(location).child(id).update(updateObj);
  };

  return {
    addProduct: addProduct,
    pullData: pullData,
    transferInventory: transferInventory,
    updateInventory: updateInventory
  };
});


/*

*/