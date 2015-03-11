angular.module('inventory.services', ['firebase'])

.factory('Inventory', function ($firebaseArray, $firebaseObject) {
  var Inven = new Firebase('https://inventory-flow-ctrl.firebaseio.com/');

  var addProduct = function(location, product, data){
    Inven.child(location).child(product).set(data);
  };

  var missedProd = function(product, data){
    Inven.child('Admin').child(product).push(data);
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

  var timestamp = function(){
    var date = new Date();
    var result = date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() +':'+date.getMinutes();
    return result;
  };

  return {
    addProduct: addProduct,
    pullData: pullData,
    pullObj: pullObj,
    updateInventory: updateInventory,
    missedProd: missedProd,
    timestamp: timestamp
  };
});


/*

*/