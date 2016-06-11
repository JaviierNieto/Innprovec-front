var app = angular.module('inprovec');

app.controller('BodegaIndexCtrl', function ($mdEditDialog, $q, $scope, listaStock, listaRespaldo, Toast, $mdDialog) {

    $scope.selected =[];

    $scope.query = {
        order: 'categoria.nombre',
        limit: 8,
        page: 1
    };

    $scope.fecha2 = new Date().getDate();

    $scope.bodegas = listaStock.get({'punto_expendio': 1});

    $scope.ver = function () {
        listaRespaldo.query({},function (data) {
            if (data.length > 0){
                $scope.fecha1 = parseInt(data[data.length - 1].fecha.split('-')[2])
            }else {
                $scope.fecha1 = 0;
            }
            $scope.res = ($scope.fecha1 - $scope.fecha2) != 0;
        });
    };

    $scope.ver();

    $scope.respaldo = {};

    $scope.respaldar = function (ev) {
        $scope.bodegas.forEach(function (data) {
            $scope.nombre = (data.cilindro.categoria.nombre + '_' + data.cilindro.tipo.peso).toLowerCase();
            if ($scope.nombre === 'cilindro_15'){
                $scope.respaldo.cilindro_15 = (data.cantidad_total_llenos + data.cantidad_total_vacios)
            }
            if ($scope.nombre === 'cilindro_18'){
                $scope.respaldo.cilindro_18 = (data.cantidad_total_llenos + data.cantidad_total_vacios)
            }
            if ($scope.nombre === 'cilindro_45'){
                $scope.respaldo.cilindro_45 = (data.cantidad_total_llenos + data.cantidad_total_vacios)
            }
            if ($scope.nombre === 'industrial_15'){
                $scope.respaldo.industrial_15 = (data.cantidad_total_llenos + data.cantidad_total_vacios)
            }
            if ($scope.nombre === 'industrial_18'){
                $scope.respaldo.industrial_18 = (data.cantidad_total_llenos + data.cantidad_total_vacios)
            }
        })
        var confirm = $mdDialog.confirm()
            .title('Respaldo de Bodega')
            .textContent('¿desea continuar?')
            .targetEvent(ev)
            .ok('Si')
            .cancel('No');
        $mdDialog.show(confirm).then(function() {
            listaRespaldo.save($scope.respaldo, function (data) {
                Toast.Mensaje('Respaldo Creado')
                $scope.ver();
            },function (err) {
                Toast.Mensaje('Error al Respaldar')
            })
        }, function() {

        });
    };

});
