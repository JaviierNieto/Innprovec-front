var app = angular.module('inprovec');

app.controller('VendedorIndexCtrl', function ($mdEditDialog, $scope, listaVendedor, $mdDialog, Toast) {
    $scope.selected = [];

    $scope.options = {
        autoSelect: true
    };

    $scope.query = {
        order: 'nombres',
        limit: 8,
        page: 1
    };


    $scope.showConfirm = function(ev) {
        var confirm = $mdDialog.confirm()
            .title('Eliminar Vendedor')
            .textContent('¿desea continuar?')
            .targetEvent(ev)
            .ok('Si')
            .cancel('No');
        $mdDialog.show(confirm).then(function() {
            listaVendedor.delete({id:$scope.selected[0].id},function (data) {
                $scope.ven = [];
                $scope.vendedores.forEach(function (vendedor) {
                    if (vendedor.id != $scope.selected[0].id) $scope.ven.push(vendedor)
                });
                $scope.vendedores = $scope.ven;
                $scope.selected = [];

                Toast.Mensaje('Vendedor Eliminado');
                
            },function (err) {
                Toast.Mensaje('Error al Eliminar');
            })
        }, function() {

        });
    };

    $scope.vendedores = listaVendedor.query();

    $scope.filter = {};

    $scope.buscare = function (valor) {
        $scope.filter.search = "";
        $scope.buscar = valor;
    };
});

app.controller('VendedorCreateCtrl', function ($mdEditDialog, $scope, listaVendedor, Toast) {
    $scope.guardarVendedor = function () {
        listaVendedor.save($scope.vendedor,function (data) {
            $scope.vendedor = {};
            Toast.Mensaje('Vendedor Creado');
        },function (err) {
            Toast.Mensaje('Error al Crear Vendedor');
        })
    };
});

app.controller('VendedorUpdateCtrl', function ($mdEditDialog, $scope, listaVendedor, $stateParams, $state, Toast) {
    $scope.vendedor = listaVendedor.get({id:$stateParams.id});
    $scope.guardarVendedor = function () {
        listaVendedor.update({id:$stateParams.id},$scope.vendedor,function (data) {
            Toast.Mensaje('Modificado Correctamente');
            $state.go('vendedor_index')
        },function (err) {
            Toast.Mensaje('Error al Modificar');
        })
    };
});

