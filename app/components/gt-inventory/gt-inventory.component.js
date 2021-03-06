angular.module('grimTools.inventory', [
  'ngRoute'
])

.config([
  '$routeProvider',

  function ($routeProvider) {
    $routeProvider.when('/', {
      template: '<gt-inventory></gt-inventory>'
    });
  }
])

.factory('gtInventory', [
  //,

  function () {
    var slots = {
      helm: null,
      chest: null,
      belt: null,
      gloves: null,
      boots: null,
      pants: null,
      shoulders: null
    };

    return {
      equip: function (slot, item) {
        slots[slot] = item;
      },
      unequip: function (slot) {
        slots[slot] = null;
      },
      getItems: function () {
        return slots;
      }
    };
  }
])

.component('gtInventory', {
  templateUrl: '/components/gt-inventory/gt-inventory.partial.html',
  controller: [
    'gtInventory',

    function (gtInventory) {
      var ctrl = this;

      ctrl.inventory = gtInventory;
    }
  ]
})
