import angular from 'angular';

import HelloWorldCtrl from 'controllers/HelloWorldCtrl';

import Foo from 'services/Foo';

angular.module('hello-world', ['hello-world.controllers']);

angular.module('hello-world.controllers', ['hello-world.services'])
  .controller('HelloWorldCtrl', HelloWorldCtrl);

angular.module('hello-world.services', [])
  .service('Foo', Foo);
