(function () {
'use strict';
//*******************
// Module
//********************
var ShoppingListCheckOff = angular.module('ShoppingListCheckOff',[]);

//*******************
//Controllers
//*******************
ShoppingListCheckOff.controller('ToBuyController',ToBuyController);
ShoppingListCheckOff.controller('AlreadyBoughtController',AlreadyBoughtController);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService){
  //View Model
  var vm = this ;
  var service = ShoppingListCheckOffService;

  //Properties
  vm.shoppingList = service.viewShoppingList('buy');

  //Methods
  vm.buyItem = service.buyItem;
}

function AlreadyBoughtController(ShoppingListCheckOffService){
  //View Model
  var vm = this ;
  var service = ShoppingListCheckOffService;

  //Properties
    vm.shoppingList = service.viewShoppingList('bought');

}

//*********************
//SERVICES
//*********************

ShoppingListCheckOff.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

function ShoppingListCheckOffService(){
  var service = this ;
  // shopping lists

  var tobuylist = [
    {item : 'Yogurt', quantity : 4 },
    {item : 'Carrots', quantity : 8 },
    {item : 'Beetroot', quantity : 2 },
    {item : 'Tomatoes', quantity : 2 },
    {item : 'BacardiRumBottles', quantity : 2 },
  ];
  var boughtlist = [];

  // shopping list enumeration
  var shoppingListsEnum = {
    'buy' : tobuylist ,
    'bought' : boughtlist 
  };

  //private utility methods
   var additem = function (item,shoppingList){
     shoppingListsEnum[shoppingList].push(item);
   };

   var removeitem = function (index,shoppingList){
     shoppingListsEnum[shoppingList].splice(index,1);
   };

//   Public methods
   service.buyItem = function (index){
     //store item
     var item = shoppingListsEnum['buy'][index];
     //Remove item from buyn shopping list
     removeitem(index,'buy');
     //add item to bought shopping list
     additem(item,'bought');

     };
    service.viewShoppingList = function(shoppingList){
      return shoppingListsEnum[shoppingList];
    };

}
})();
