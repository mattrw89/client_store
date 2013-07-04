'use strict';

angular.module('ClientStoreTestApp')
  .factory('PhoneResource', function () {
    // Service logic
    // ...
    var PhoneResource = {};

    PhoneResource.PhoneNumber = function(hash) {
      this.d = hash;

      this.update = function(hash) {
        console.log('update called');
        console.log(this.d.id);
        this.d = hash;
      };

      return this;
    };

    return PhoneResource;

  });
