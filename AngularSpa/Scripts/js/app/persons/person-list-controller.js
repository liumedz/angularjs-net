

(function (ng) {
    'use strict';

    ng.module('module.persons')
    .controller('personListController', ['$scope', 'personService', function ($scope, personsService) {

        $scope.persons = personsService.get();

    }]);


})(angular)