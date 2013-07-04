'use strict';

describe('Service: ClientStore', function () {

  // load the service's module
  beforeEach(module('ClientStoreTestApp'));

  // instantiate service
  var ClientStore;
  beforeEach(inject(function (_ClientStore_) {
    ClientStore = _ClientStore_;
  }));

  it('should do something', function () {
    expect(!!ClientStore).toBe(true);
  });

});
