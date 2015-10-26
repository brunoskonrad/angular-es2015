let subject;
let $controller;
let $rootScope;
let scope;
let Foo;

describe('HelloWorldCtrl', () => {
  beforeEach(angular.mock.module('hello-world.controllers'));

  beforeEach(angular.mock.inject((_$controller_, _Foo_, _$rootScope_) => {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    Foo = _Foo_;
  }));

  beforeEach(() => {
    scope = $rootScope.$new();
    subject = $controller('HelloWorldCtrl', {
      $scope: scope,
      Foo
    });
  });

  it('expect that the controller is defined', () => {
    expect(subject).toBeDefined();
  });

  it('get the `hello` property as `world`', () => {
    expect(scope.hello).toBe('world');
  });

  it('access the `foo` property', () => {
    spyOn(Foo, 'getFoo').and.returnValue('foo');

    scope.$digest();

    expect(scope.foo).toBe('foo');
  });
});
