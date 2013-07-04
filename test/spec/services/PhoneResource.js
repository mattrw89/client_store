'use strict';

describe('Service: PhoneResource', function () {

  // load the service's module
  beforeEach(module('ClientStoreTestApp'));

  // instantiate service
  var PhoneResource;
  beforeEach(inject(function (_PhoneResource_) {
    PhoneResource = _PhoneResource_;
  }));

  it('should do something', function () {
    expect(!!PhoneResource).toBe(true);
  });

});
