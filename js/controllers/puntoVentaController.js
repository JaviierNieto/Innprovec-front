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

    $scope.filter = {};

    $scope.buscare = function (valor) {
        $scope.filter.search = "";
        $scope.buscar = valor;
    };

    /*
    $scope.PuntosVenta = []

    $scope.PuntosVentas = function () {
        $scope.busqueda = listaPuntoVenta.query({},function (punto) {
            punto.forEach(function (data) {
                if (data.id > 2) $scope.PuntosVenta.push(data)
            })
        });
    }
    $scope.PuntosVentas();*/

    $scope.stocksGeneral = listaStock.query();
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

    $scope.$watch('selected[0].id', function (data) {
        $scope.stocks = [];
            try {
                if ($scope.selected[0].id>0){
                    $scope.stocksGeneral.forEach(function (data) {
                        if (data.punto_expendio.id == $scope.selected[0].id) $scope.stocks.push(data)
                    })
                }
            }
            catch(err) {
            }
    });

    $scope.aumento = function (total_llenos, total_vacios, inicial_llenos, inicial_vacios) {
        var valor1 =  (total_llenos - inicial_llenos);
        var valor2 =  (total_vacios - inicial_vacios);
        var respuesta = "";
        if (valor1 < 0){
            respuesta += "Disminuyo " + (valor1 * -1) + " / "
        }else if(valor1 > 0){
            respuesta += "Aumento " + valor1 + " / "
        }else {
            respuesta += "Sin Cambio / "
        }
        if (valor2 < 0){
            respuesta += "Disminuyo " + (valor2 * -1)
        }else if(valor2 > 0){
            respuesta += "Aumento " + valor2
        }else {
            respuesta += "Sin Cambio"
        }
        return respuesta
    }
});

app.controller('PuntoVentaCreateCtrl', function ($mdEditDialog, $q, $scope, listaPuntoVenta, listaDepartamento, listaCiudad) {
    $scope.departamentos = listaDepartamento.query();
    $scope.punto = {};

    $scope.$watch('departamento', function(data) {
        if (data != undefined){
            $scope.ciudades = listaCiudad.get({'departamento':data});
        }
    });

    $scope.cilindros_nombre = [
        {categoria: "Cilindro", tipo: 15, cilindro:1, cantidad_llenos:0, cantidad_vacios:0},
        {categoria: "Cilindro", tipo: 18, cilindro:2, cantidad_llenos:0, cantidad_vacios:0},
        {categoria: "Cilindro", tipo: 45, cilindro:3, cantidad_llenos:0, cantidad_vacios:0},
        {categoria: "Industrial", tipo: 15, cilindro:4, cantidad_llenos:0, cantidad_vacios:0},
        {categoria: "Industrial", tipo: 18, cilindro:5, cantidad_llenos:0, cantidad_vacios:0}
    ];

    $scope.guardar = function () {
        $scope.punto.cilindros = [];
        $scope.cilindros_nombre.forEach(function (data) {
            $scope.punto.cilindros.push({cilindro: data.cilindro, cantidad_inicial_llenos:data.cantidad_llenos,
                cantidad_inicial_vacios:data.cantidad_vacios})
        });
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
    $scope.stocksupdate = listaStock.get({'punto_expendio': $stateParams.id})

    $scope.guardar = function () {
        $scope.stocksupdate.forEach(function (stock) {
            listaStock.update({'id':stock.id}, stock,function (data) {
            },function (err) {
                console.log(err)
            })
        })
    }
});
