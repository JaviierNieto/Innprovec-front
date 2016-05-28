var app = angular.module('inprovec');

app.controller('VendedorIndexCtrl', function ($mdEditDialog, $q, $scope, listaVendedor) {

    $scope.selected = [];

    $scope.options = {
        autoSelect: true,
        rowSelection: true
    };

    $scope.query = {
        order: 'nombres',
        limit: 8,
        page: 1
    };

    $scope.vendedor = listaVendedor.query();

    $scope.guardarVendedor = function () {
        listaVendedor.save($scope.vendedor,function (data) {
            console.log(vendedor);
            $scope.vendedor = {}
        },function (err) {
            alert("ojo la estas cagando")
        })


    };
});

