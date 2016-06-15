var app = angular.module('inprovec');

app.controller('inicio', function (localStorageService, $scope, $state, $rootScope) {
    $scope.inicio()
    $scope.iniciar = function () {
       if ($scope.username === 'dilson' && $scope.password === 'dilson12345678') {
           localStorageService.set('User', $scope.username);
           $rootScope.usuario = localStorageService.get('User')
           $scope.ver = true;
           $state.go('bodega_index');
       }
    }
    
});