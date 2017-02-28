(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var tobuy = this;
  tobuy.items = [];
//  tobuy.itemName = "";
//  tobuy.itemQuantity = "";
  tobuy.items = ShoppingListCheckOffService.tobuyitems;
  tobuy.moveItem = function () {
    ShoppingListCheckOffService.moveItem(tobuy.itemName,tobuy.itemQuantity);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadybought = this;
  alreadybought.items = [];
  alreadybought.items =  ShoppingListCheckOffService.tobuyitems;
}
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var tobuyitems = [
    {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "RedVelvetCupCakes",
    quantity: "5"
  }
  ];
  var boughtitems =[];

  service.moveItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    boughtitems.push(item);
  };

//  service.removeItem = function (itemIdex) {
  //  items.splice(itemIdex, 1);
//  };


}

})();
