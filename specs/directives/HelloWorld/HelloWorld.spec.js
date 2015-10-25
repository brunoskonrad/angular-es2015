let scope, subject;
let $compile;
let $rootScope;

describe('HelloWorld', () => {
  beforeEach(angular.mock.module('hello-world.directives'));

  beforeEach(angular.mock.inject((_$rootScope_, _$compile_) => {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  beforeEach(() => {
    scope = $rootScope.$new();
    scope.helloWorldClick = jasmine.createSpy('hello world');
  });

  it('check if the subject was rendered with "Hello, world"', () => {
    subject = $compile('<hello-world></hello-world>')(scope);
    scope.$digest();

    expect(subject.html()).toContain('Hello, world');
  });

  it('check if render with another subject then `world`', () => {
    subject = $compile('<hello-world who="Bruno"></hello-world>')(scope);
    scope.$digest();

    expect(subject.html()).toContain('Hello, Bruno');
  });
});
