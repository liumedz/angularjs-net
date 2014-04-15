(function (ng) {
    'use strict';

    ng.module('admin.assemblies')
    .factory('personService', ['$resource', function ($resource) {
        return $resource('/api/persons/', null, {
            get: { method: 'GET', isArray: true }
        });
    }]);

}(angular));