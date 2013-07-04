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

    var data2 = {
      'phone_number':[
        {
          'id':1,
          'number':'9998887654'
        },
        {
          'id':2,
          'number':'i_changed'
        }
      ]
    }

    ClientStore.registerModels(['user','phone_number']);

    ClientStore.parseJson(data1);

    $scope.user = ClientStore.get('user',1);
    $scope.firstPhone = ClientStore.get('phone_number',1);


    $scope.updatePhoneNumber = function() {
      ClientStore.parseJson(data2);
    }

    $scope.directObject = ClientStore.all.phone_number[2];

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
