var app = angular.module('inprovec');

app.controller('VendedorIndexCtrl', function ($mdEditDialog, $q, $scope, listaVendedor, $mdDialog) {

    $scope.query = {
        order: 'name',
        limit: 5,
        page: 1
    };

    $scope.vendedor = listaVendedor.query();

    $scope.showAdd = function(ev) {
        $mdDialog.show({
                controller: DialogController,
                templateUrl: "templates/Vendedor/_formVend.html",
                targetEvent: ev
            })
            .then(function(answer) {
                alert('You said the information was "' + answer + '".');
            }, function() {
                alert('You cancelled the dialog.');
            });
    };

    function DialogController($scope, $mdDialog) {
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            listaVendedor.save($scope.vendedor,function (data) {
                $scope.vendedor = {}
            },function (err) {
                alert("ojo la estas cagando")
            });
            $mdDialog.hide(answer);
        };
    }
});



