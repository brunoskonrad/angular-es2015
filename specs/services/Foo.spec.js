describe('Foo', () => {
  let subject;

  beforeEach(angular.mock.module('hello-world.services'));

  beforeEach(angular.mock.inject((Foo) => {
    subject = Foo;
  }));

  it('gets the foo', () => {
    expect(subject.getFoo()).toBe('foo');
  });
});
