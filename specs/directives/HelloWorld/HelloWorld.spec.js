import template from 'templates/hello-world.html';

let scope, subject;
let $compile;
let $rootScope;
let $httpBackend;
let $controller;

describe('HelloWorld', () => {
  beforeEach(angular.mock.module('hello-world.directives'));

  beforeEach(angular.mock.inject(($injector, _$controller_, _$rootScope_, _$compile_) => {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $controller = _$controller_;
    $httpBackend = $injector.get('$httpBackend');
  }));

  beforeEach(() => {
    $httpBackend.whenGET('templates/hello-world.html').respond(template);

    scope = $rootScope.$new();
    $controller('HelloWorldDirectiveCtrl', {$scope: scope});
  });

  it('check if the subject was rendered with "Hello, world"', () => {
    subject = $compile('<hello-world></hello-world>')(scope);
    scope.$digest();

    $httpBackend.flush();

    expect(subject.html()).toContain('Hello, world');
  });

  it('check if render with another subject then `world`', () => {
    subject = $compile('<hello-world who="Bruno"></hello-world>')(scope);
    scope.$digest();

    $httpBackend.flush();

    expect(subject.html()).toContain('Hello, Bruno');
  });
});
