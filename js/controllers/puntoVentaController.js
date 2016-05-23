var app = angular.module('inprovec');

app.controller('PuntoVentaIndexCtrl', function ($mdEditDialog, $q, $scope, listaPuntoVenta,listaDepartamento, $mdDialog ,$timeout) {

    $scope.query = {
        order: 'nombre',
        limit: 8,
        page: 1
    };

    $scope.PuntoVenta = listaPuntoVenta.query();

    

    $scope.showAdd = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: "templates/Punto_Venta/_fromPunt.html",
            targetEvent: ev
        });
    };

    var DialogController = function ($scope, $mdDialog) {
        $scope.loadDepar = function() {
            // Use timeout to simulate a 650ms request.
            return $timeout(function() {
                $scope.Departamento = listaDepartamento.query();
            }, 650);
        };
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            console.log($scope.a);
            $mdDialog.hide(answer);
        };
    };
});
