(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirtstController', function ($scope) {
  $scope.name = "yaakov";
  $scope.sayHello = function () {
    return "Hello Coursera!"
  };
});

})();
