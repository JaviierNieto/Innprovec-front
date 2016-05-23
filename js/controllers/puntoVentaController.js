var app = angular.module('inprovec');

app.controller('PuntoVentaIndexCtrl', function ($mdEditDialog, $q, $scope, listaPuntoVenta, $mdDialog) {

    $scope.query = {
        order: 'nombre',
        limit: 8,
        page: 1
    };

    $scope.PuntoVenta = listaPuntoVenta.query();

});
