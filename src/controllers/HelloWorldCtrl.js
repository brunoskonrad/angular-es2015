export default class HelloWorldCtrl {
  constructor($scope, Foo) {
    $scope.hello = 'world';
    $scope.foo = Foo.getFoo();
  }
}
