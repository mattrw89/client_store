'use strict';

angular.module('ClientStoreTestApp')
  .factory('ClientStore', function () {
    // Service logic
    // ...

    var all = {};

    // Public API here
    return {
      registerModels: function (models) {
        var modelNames = [];
        console.log('register');
        // if it's an array loop over each model name and check if it is in the root of all
        //   if the model name is not then add it
        if (angular.isArray(models)) {
          modelNames = models;
        } else {
          modelNames.push(models);
        }

        _.each(modelNames, function(name) {
          var keys = _.keys(all);
          if ( !(_.indexOf(keys, name) >= 0) ) {
            all[name] = {};
          }
        });

        return _.keys(all);
      },

      get: function(model, id) {
        try {
          return all[model][id];
        }
        catch(err) {
          console.log(model + '/' + id + ' not found');
          return null;
        }
      },

      parseJson: function(jsonData) {
        //iterate over the outer most keys of the json (representative of models)
        _.forEach(jsonData, function(value, key) {

          //if the key is also found in all.keys then add the object key'd by its ID
          if (_.indexOf(_.keys(all), key) >= 0) {
            _.each(value, function(obj) {

              //check if all[key][obj.id] exists
              // if not, define it.
              // if so, update the entry
              if (_.isUndefined(all[key][obj.id])) {
                all[key][obj.id] = obj;
              } else {
                // do the same thing for now? maybe an event will need to be fired
                all[key][obj.id] = obj;
              }

            });
          }
        });
        console.log(all);

      }
    };
  });
