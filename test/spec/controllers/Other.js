'use strict';

describe('Controller: OtherCtrl', function () {

  // load the controller's module
  beforeEach(module('ClientStoreTestApp'));

  var OtherCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OtherCtrl = $controller('OtherCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
