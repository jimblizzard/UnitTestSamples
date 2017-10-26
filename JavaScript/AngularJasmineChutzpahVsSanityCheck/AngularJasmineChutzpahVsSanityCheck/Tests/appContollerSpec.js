/// <reference path="..\Scripts/angular.js" />
/// <reference path="..\Scripts/angular-mocks.js" />
/// <reference path="..\Scripts/appController.js" />

describe("when using appController", function () {
    // initialize Angular
    beforeEach(module('app'));
    //parse out the scope for use in our unit tests
    var scope;
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        var ctrl = $controller('appController', { $scope: scope });
    }));
    it('initial value is 5', function () {
        expect(scope.value).toBe(5); 
    });
});