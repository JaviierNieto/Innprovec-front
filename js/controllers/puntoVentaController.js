var app = angular.module('inprovec');

app.controller('PuntoVentaIndexCtrl', function ($mdEditDialog, $q, $scope, listaPuntoVenta, $mdDialog ,$timeout) {

    $scope.query = {
        order: 'nombre',
        limit: 8,
        page: 1
    };

    $scope.PuntoVenta = listaPuntoVenta.query();

    $scope.user = null;
    $scope.users = null;
    
    $scope.loadUsers = function() {
        // Use timeout to simulate a 650ms request.
        return $timeout(function() {
            $scope.users =  $scope.PuntoVenta.ciudad.departamento.nombre;
        }, 650);
    };
    $scope.showAdd = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: "templates/Vendedor/_formVend.html",
            targetEvent: ev
        });
    };

    var DialogController = function ($scope, $mdDialog) {
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            listaVendedor.save($scope.vendedor,function (data) {
                $scope.vendedor = {};
                console.log(data)
            },function (err) {
                alert(err)
            });
            $mdDialog.hide(answer);
        };
    };
});
