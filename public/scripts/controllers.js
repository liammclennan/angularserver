'use strict';

angularserverApp.controller('appController', ['$scope', function appController($scope, $rootScope) {
    var personGateway = resourceclient(Person);
    personGateway.create(new Person({
        name: 'Fred',
        age: Math.random() * 100
    })).then(function (person) {
        return personGateway.get();
    }).then(function (people) {
        $scope.people = people;
        $scope.$apply();
    });
}]);
