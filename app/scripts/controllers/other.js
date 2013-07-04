'use strict';

angular.module('ClientStoreTestApp')
  .controller('OtherCtrl', function ($scope, ClientStore) {

    var setPhoneNumber = function() {
      return {
        'phone_number':[
          {
            'id':2,
            'number':$scope.phoneNumberField2
          }
        ]
      }
    };

    $scope.updatePhoneNumber = function() {
      ClientStore.parseJson(setPhoneNumber());
    };

    $scope.phone1 = ClientStore.get('phone_number',1);
    $scope.phone2 = ClientStore.get('phone_number',2);
  });
