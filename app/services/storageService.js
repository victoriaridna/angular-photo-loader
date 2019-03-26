var app = angular.module('app.services.storage',[]);

(function () {
    //https://github.com/jviotti/electron-json-storage

    var app = angular.module('app.storage-services', []);

    app.service('StorageService', ['$q', '$log', 'CampaignFactory', function ($q, $log, CampaignFactory) {
        var scope = this;
        const storage = require('electron-json-storage');
        scope.data = {};

        //TODO: replace chrome storage with alternative

        scope.findAll = function (callback) {
            storage.getAll(function (error, data) {
                if (error)
                    throw new Error(error);
                scope.data = data;
                callback(scope.data);
            });
        };
        scope.sync = function () {
            //chrome.storage.sync.set(scope.data, function () {
            //});
        };
        scope.add = function (key, value) {
            var d=$q.defer();
            storage.set(key, value, function (error) {
                if (error) throw new Error(error);
                scope.data[key]= value;
                d.resolve()
            });
            return d.promise;
        };

        scope.removeAll = function (exceptArr, callback) {
            var d = data = {};
            if (exceptArr) {
                angular.forEach(exceptArr, function (exception) {
                    data[exception] = scope.data[exception];
                });
            }
            scope.data = data;
            storage.clear(function(error) {
                if (error) throw new Error(error);
            });
        };
    }]);

})();