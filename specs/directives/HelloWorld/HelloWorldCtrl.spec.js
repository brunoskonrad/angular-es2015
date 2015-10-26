let scope, subject;
let $controller;
let $rootScope;

describe('HelloWorldDirectiveCtrl', () => {
  beforeEach(angular.mock.module('hello-world.directives.controllers'));

  beforeEach(angular.mock.inject((_$controller_, _$rootScope_) => {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
  }));

  describe('the path with clean $scope', () => {
    beforeEach(() => {
      scope = $rootScope.$new();
      subject = $controller('HelloWorldDirectiveCtrl', {
        $scope: scope
      });
    });

    it('get the `who` as the entire world', () => {
      expect(scope.who).toBe('world');
    });

    it('call the .helloWorldClick', () => {
      spyOn(window, 'alert');

      scope.helloWorldClick();

      expect(window.alert).toHaveBeenCalledWith('Hello world');
    });
  });

  describe('and the path with a different `who`', () => {
    beforeEach(() => {
      scope = $rootScope.$new();
      scope.who = 'Konrad';
      subject = $controller('HelloWorldDirectiveCtrl', {
        $scope: scope
      });
    });

    it('knos that `who` is, in this case, myself (Konrad)', () => {
      expect(scope.who).toBe('Konrad');
    });

    it('call the .helloWorldClick (as Konrad)', () => {
      spyOn(window, 'alert');

      scope.helloWorldClick();

      expect(window.alert).toHaveBeenCalledWith('Hello Konrad');
    });
  });
});
