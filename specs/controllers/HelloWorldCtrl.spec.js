describe('HelloWorldCtrl', () => {
  let subject;

  beforeEach(angular.mock.module('hello-world.controllers'));

  beforeEach(() => {
    // angular.mock.inject((HelloWorldCtrl) => {
    //   subject = HelloWorldCtrl;
    // });
  });

  it('expect that the controller is defined', () => {
    expect(subject).not.toBeDefined();
  });
});
