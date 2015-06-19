(function () {
  var oldNg = window.angular
  window.angular = {}
  var angular = require('angular')
  var hostDiv = document.createElement('div')

  hostDiv.setAttribute('ng-controller', 'TestCtrl as ctrl')
  hostDiv.innerText = '{{ctrl.evidence}}\n{{ctrl.counter}}'
  document.body.appendChild(hostDiv)
  angular.module('plugin', [])
  require('./TestController')

  angular.element(document).ready(function () {
    angular.bootstrap(hostDiv, ['plugin']) 
  })

  console.log('our plugin uses', angular.version)
  window.angular = oldNg
})()
