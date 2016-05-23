var app = angular.module('inprovec');

app.controller('BodegaIndexCtrl', function ($mdEditDialog, $q, $scope, listaBodega, $mdDialog) {

    $scope.query = {
        order: 'categoria.nombre',
        limit: 8,
        page: 1
    };

    $scope.bodega = listaBodega.query();

});
