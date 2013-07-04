'use strict';

angular.module('ClientStoreTestApp')
  .factory('ClientStore', function ($injector) {
    // Service logic
    // ...
    var ClientStore = {};
    ClientStore.all = {};

    ClientStore.registerModels = function (models) {
      console.log(this);
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
        console.log(this);
        var keys = _.keys(this.all);
        if ( !(_.indexOf(keys, name) >= 0) ) {
          this.all[name] = {};
        }
      }, this);

      return _.keys(this.all);
    };

    ClientStore.get = function(model, id) {
      try {
        if ( angular.isArray(id) ) {
          console.log('array!');
          console.log(model + id);
          var data = [];
          _.each(id, function(x) {
            data.push(this.all[model][x]);
          }, this);
          return data;
        } else {
          return this.all[model][id];
        }
      }
      catch(err) {
        console.log(err);
        console.log(model + '/' + id + ' not found');
        return null;
      }
    };

    ClientStore.parseJson = function(jsonData) {
      //iterate over the outer most keys of the json (representative of models)
      _.forEach(jsonData, function(value, key) {

        //if the key is also found in all.keys then add the object key'd by its ID
        if (_.indexOf(_.keys(this.all), key) >= 0) {
          _.each(value, function(obj) {

            //check if all[key][obj.id] exists
            // if not, define it.
            // if so, update the entry
            if (_.isUndefined(this.all[key][obj.id])) {
              if (key === 'phone_number') {
                var res = $injector.get('PhoneResource');
                this.all[key][obj.id] = new res.PhoneNumber(obj);
              } else if (key === 'user') {
                var res = $injector.get('UserResource');
                this.all[key][obj.id] = new res.User(obj);
              }
              else {
                this.all[key][obj.id] = obj;
              }
            } else {
              // do the same thing for now? maybe an event will need to be fired
              if (key === 'phone_number') {
                var existingEntry = this.all[key][obj.id];
                existingEntry.update(obj);
              } else {
                this.all[key][obj.id] = obj;
              }
            }

          }, this);
        }
      }, this);
      console.log(this.all);

    };

    return ClientStore;
  });
