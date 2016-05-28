var app = angular.module('inprovec');

app.controller('VendedorIndexCtrl', function ($mdEditDialog, $scope, listaVendedor) {

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

    $scope.vendedores = listaVendedor.query();

    $scope.eliminar = function () {
        listaVendedor.delete({id:$scope.selected[0].id},function (data) {
            $scope.ven = []
            $scope.vendedores.forEach(function (vendedor) {
                if (vendedor.id != $scope.selected[0].id) $scope.ven.push(vendedor)
            });
            $scope.vendedores = $scope.ven
            $scope.selected = [];
            /*aca un mensaje*/ alert('se ha eliminado');
        },function (err) {
            console.log(err)
        })
    }

});

app.controller('VendedorCreateCtrl', function ($mdEditDialog, $scope, listaVendedor) {
    $scope.guardarVendedor = function () {
        listaVendedor.save($scope.vendedor,function (data) {
            $scope.vendedor = {};
            /*aca un mensaje*/ alert(data.nombres+' se ha guardado');
        },function (err) {
            alert("ojo la estas cagando")
        })
    };
});

app.controller('VendedorUpdateCtrl', function ($mdEditDialog, $scope, listaVendedor, $stateParams) {
    $scope.vendedor = listaVendedor.get({id:$stateParams.id});
    $scope.guardarVendedor = function () {
        listaVendedor.update($scope.vendedor,function (data) {
            $scope.vendedor = {};
            /*aca un mensaje*/ alert(data.nombres+' se ha modificado');
        },function (err) {
            alert("ojo la estas cagando")
        })
    };
});

