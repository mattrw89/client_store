'use strict';

describe('Controller: CreatePhoneNumberCtrl', function () {

  // load the controller's module
  beforeEach(module('ClientStoreTestApp'));

  var CreatePhoneNumberCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreatePhoneNumberCtrl = $controller('CreatePhoneNumberCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
