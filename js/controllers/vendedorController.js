var app = angular.module('inprovec');

app.controller('VendedorIndexCtrl', function ($mdEditDialog, $q, $scope, listaVendedor, $mdDialog) {

    $scope.query = {
        order: 'nombres',
        limit: 8,
        page: 1
    };

    $scope.vendedor = listaVendedor.query();

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

