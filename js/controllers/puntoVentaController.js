var app = angular.module('inprovec');

app.controller('PuntoVentaIndexCtrl', function ($mdEditDialog, $q, $scope, listaPuntoVenta, listaStock) {

    $scope.selected = [];

    $scope.options = {
        autoSelect: true,
        rowSelection: true
    };

    $scope.query = {
        order: 'nombre',
        limit: 8,
        page: 1
    };

    $scope.PuntosVenta = listaPuntoVenta.query();


    $scope.eliminar = function () {
        listaPuntoVenta.delete({id:$scope.selected[0].id},function (data) {
            $scope.nuevo = [];
            $scope.PuntosVenta.forEach(function (punto) {
                if (punto.id != $scope.selected[0].id) $scope.nuevo.push(punto)
            });
            $scope.PuntosVenta = $scope.nuevo;
            $scope.selected = [];
            console.log('se ha eliminado');
        },function (err) {
            console.log(err)
        })
    };

    $scope.$watch('selected.length', function (data) {
        if (data>0){
            $scope.stocks = listaStock.get({'punto_expendio': $scope.selected[0].id})
        }
    })

    $scope.aumento = function (total,inicial) {
        valor =  (total-inicial);
        if (valor < 0){
            return "Disminuyo "+ (valor * -1)
        }else if(valor>0){
            return "Aumento "+ valor
        }else {
            return "Sin Cambio"
        }
    }
});

app.controller('PuntoVentaCreateCtrl', function ($mdEditDialog, $q, $scope, listaPuntoVenta, listaDepartamento, listaCiudad) {
    $scope.departamentos = listaDepartamento.query();

    $scope.$watch('departamento', function(data) {
        if (data != undefined){
            $scope.ciudades = listaCiudad.get({'departamento':data});
            console.log(data)
        }
    });

    $scope.guardar = function () {
        listaPuntoVenta.save($scope.punto,function (data) {
            console.log('guardado' + data)
        },function (err) {
            console.log(err)
        })
    }

});

app.controller('PuntoVentaUpdateCtrl', function ($mdEditDialog, $q, $scope, listaPuntoVenta, listaDepartamento, listaCiudad, $stateParams, $state) {
    $scope.departamentos = listaDepartamento.query();

    $scope.$watch('departamento', function(data) {
        if (data != undefined){
            $scope.ciudades = listaCiudad.get({'departamento':data});
            console.log(data)
        }
    });

    $scope.punto = listaPuntoVenta.get({'id':$stateParams.id},function (data) {
        $scope.departamento = data.ciudad.departamento.id;
        $scope.punto.ciudad = data.ciudad.id;
    });

    $scope.guardar = function () {
        listaPuntoVenta.update({'id':$stateParams.id},$scope.punto,function (data) {
            $state.go('puntoVenta_index')
        },function (err) {
            console.log(err)
        })
    }

});

app.controller('PuntoVentaUpdateStockCtrl', function ($mdEditDialog, $q, $scope, listaPuntoVenta, listaStock, $stateParams) {
    $scope.stocksupdate = listaStock.get({'punto_expendio': $stateParams.id}, function (data) {
        console.log(data)
    })
});
