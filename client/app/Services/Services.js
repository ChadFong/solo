angular.module('inventory.services', ['firebase'])

.factory('Inventory', function () {
  var Inven = new Firebase('https://inventory-flow-ctrl.firebaseio.com/');

  var addProduct = function(data){
    Inven.push(data);
  };

  return {
    addProduct: addProduct
  };
});


/*

*/