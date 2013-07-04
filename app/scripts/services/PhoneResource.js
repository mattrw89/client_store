'use strict';

angular.module('ClientStoreTestApp')
  .factory('PhoneResource', function ($rootScope, $injector) {
    // Service logic
    // ...
    var PhoneResource = {};

    PhoneResource.PhoneNumber = function(hash) {
      this.d = hash;

      this.update = function(hash) {
        $rootScope.$broadcast('updatePhoneNumber', {'id':this.id})
      };

      $rootScope.$on('updatePhoneNumber', function(data) {
        var cs = $injector.get('ClientStore');
        this.d = cs.get('phone_number', data.id);
      });

      return this;
    };

    return PhoneResource;

  });
