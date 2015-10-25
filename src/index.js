import angular from 'angular';
import 'polyfill/polyfill';

import HelloWorldCtrl from 'controllers/HelloWorldCtrl';

import Foo from 'services/Foo';

import { helloWorld, HelloWorldDirectiveCtrl } from 'directives/HelloWorld';

angular.module('hello-world', ['hello-world.controllers', 'hello-world.directives']);

angular.module('hello-world.controllers', ['hello-world.services'])
  .controller('HelloWorldCtrl', HelloWorldCtrl);

angular.module('hello-world.services', [])
  .service('Foo', Foo);

angular.module('hello-world.directives', ['hello-world.directives.controllers'])
  .directive('helloWorld', helloWorld);

angular.module('hello-world.directives.controllers', [])
  .controller('HelloWorldDirectiveCtrl', HelloWorldDirectiveCtrl);
