'use strict';

describe('Controller: PhotoDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('potatoApp'));

  var PhotodetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhotodetailCtrl = $controller('PhotoDetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
