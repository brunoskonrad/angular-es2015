export function helloWorld() {
  return {
    restrict: 'E',
    scope: {
      who: '@'
    },
    controller: 'HelloWorldDirectiveCtrl',
    // templateUrl: 'templates/hello-world.html'
    template: '<p ng-click="helloWorldClick()">Hello, {{who}}</p>'
  }
}

export class HelloWorldDirectiveCtrl {
  constructor($scope) {
    this.scope = $scope;
    $scope.who = $scope.who || 'world';
    $scope.helloWorldClick = this.helloWorldClick.bind(this);
  }

  helloWorldClick() {
    alert(`Hello ${this.scope.who}`);
  }
}
