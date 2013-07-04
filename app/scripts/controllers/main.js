'use strict';

angular.module('ClientStoreTestApp')
  .controller('MainCtrl', function ($scope, ClientStore) {
    var data1 = {
      'user':[{
        'id': 1,
        'name': 'Matt Webb',
        'phone_number_ids':[1,2]
      }],
      'phone_number':[
        {
        'id':1,
        'number':'9998887654'
        },
        {
          'id':2,
          'number':'1234567890'
        }
      ]
    };

    var setPhoneNumber = function(number) {
      return {
        'phone_number':[
          {
            'id':1,
            'number':number
          }
        ]
      }
    };

    $scope.updatePhoneNumber = function() {
      ClientStore.parseJson(setPhoneNumber($scope.phoneNumberField));
    };

    ClientStore.registerModels(['user','phone_number']);

    ClientStore.parseJson(data1);

    $scope.user = ClientStore.get('user',1);
    $scope.userPhones = $scope.user.q('phone_number');

    $scope.refreshUserPhones = function() {
      $scope.userPhones = $scope.user.q('phone_number');
    }

    $scope.firstPhone = ClientStore.get('phone_number',1);

    $scope.secondPhone = ClientStore.get('phone_number',2);

    $scope.addPhoneIdToUser = function() {
      $scope.user.d.phone_number_ids.push($scope.numberToAdd);
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
