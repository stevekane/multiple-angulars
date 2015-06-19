var root = document.getElementById('root')

angular.module('app', [])
angular.module('app')
.controller('AppCtrl', ['$interval', function ($interval) {
  var self = this

  this.appContent = 'some stuff loaded from the app' 
  this.counter = 100
  $interval(function () { self.counter-- }, 1000)
}])
angular.element(document).ready(function () {
  angular.bootstrap(root, ['app']) 
})
console.log('Their app uses', angular.version)
