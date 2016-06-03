var app = angular.module('inprovec');

app.controller('BodegaIndexCtrl', function ($mdEditDialog, $q, $scope, listaStock) {

    $scope.query = {
        order: 'categoria.nombre',
        limit: 8,
        page: 1
    };

    $scope.bodegas = listaStock.get({'punto_expendio': 1}, function (data) {
        console.log(data)
    });

});
