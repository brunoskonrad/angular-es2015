describe('Foo', () => {
  let subject;

  beforeEach(angular.mock.module('hello-world.services'));

  beforeEach(angular.mock.inject((Foo) => {
    subject = Foo;
  }));

  it('expect that the Foo service is defined', () => {
    expect(subject).toBeDefined();
  });
});
