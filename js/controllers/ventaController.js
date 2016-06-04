var app = angular.module('inprovec');

app.controller('VentaIndexCtrl', function ($mdEditDialog, $scope, listaVenta, listaDetalle) {

    $scope.selected = [];

    $scope.options = {
        autoSelect: true
    };

    $scope.query = {
        order: 'nombres',
        limit: 8,
        page: 1
    };

    $scope.ventas = listaVenta.query();
    $scope.detalle = listaDetalle.query();


    $scope.$watch('selected[0].id', function (data) {
        $scope.stocks = [];
        try {
            if ($scope.selected[0].id>0){
                $scope.detalle.forEach(function (data) {
                    if (data.venta.id == $scope.selected[0].id) $scope.stocks.push(data)
                })
            }
        }
        catch(err) {
        }
    });

});

app.controller('VentaCreateCtrl', function ($mdEditDialog, $scope, listaVenta) {






});