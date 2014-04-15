(function (ng) {

    'use strict';

    ng.module('module.persons')
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider
           .when('/admin/assemblies', { controller: 'assemblyListController', templateUrl: 'admin-assemblies-list', caseInsensitiveMatch: true })
           .otherwise({ redirectTo: 'admin' });
    }]);

})(angular)