'use strict';

angular.module('ClientStoreTestApp')
  .controller('CreatePhoneNumberCtrl', function ($scope, ClientStore) {
    $scope.pnId = 2;

    var newPhoneNumber = function() {
      $scope.pnId += 1;
      return {
        'phone_number':[
          {
            'id':$scope.pnId,
            'number': $scope.newPhoneNumber
          }
        ]
      }
    };

    $scope.addPhoneNumber = function() {
      var d = newPhoneNumber();
      console.log(d);
      ClientStore.parseJson(d);
    };

    $scope.phone1 = ClientStore.get('phone_number',1);
    $scope.phone2 = ClientStore.get('phone_number',2);

    $scope.allPhoneNumbersInClientStore = ClientStore.all.phone_number;
  });
