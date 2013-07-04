'use strict';

angular.module('ClientStoreTestApp')
  .factory('UserResource', function (ClientStore) {
    // Service logic
    // ...

    var UserResource = {};

    UserResource.User = function(hash) {
      this.d = hash;

      this.update = function(hash) {
        this.d = hash;
      };

      this.q = function(relation) {
        var param = relation + '_ids';
        return ClientStore.get(relation, this.d[param]);
      };

      return this;
    };
    return UserResource;
  });
