angular.module('grimTools.items', [
  'ngRoute'
])

.config([
  '$routeProvider',

  function ($routeProvider) {
    $routeProvider.when('/items/:slot', {
      template: '<gt-items></gt-items>'
    });
  }
])

.component('gtItems', {
  templateUrl: '/components/gt-items/gt-items.partial.html',
  controller: function () {
    //
  }
})
