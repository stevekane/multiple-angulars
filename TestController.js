angular.module('plugin')
.controller('TestCtrl', ['$interval', function ($interval) {
  var self = this

  this.evidence = "The plugin works"
  this.counter = 0

  $interval(function () { self.counter++ }, 500)
}])
