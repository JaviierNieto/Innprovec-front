var app = angular.module('inprovec');

app.controller('BodegaIndexCtrl', function ($mdEditDialog, $q, $scope, listaStock, listaRespaldo, Toast, $mdDialog) {

    $scope.selected =[];

    $scope.query = {
        order: 'categoria.nombre',
        limit: 8,
        page: 1
    };
    $scope.bodegas = listaStock.get({'punto_expendio': 1});

    $scope.general = [
        {Categoria: "Cilindro", Tipo: 15, cantidad_llenos: 0, cantidad_vacios: 0},
        {Categoria: "Cilindro", Tipo: 18, cantidad_llenos: 0, cantidad_vacios: 0},
        {Categoria: "Cilindro", Tipo: 45, cantidad_llenos: 0, cantidad_vacios: 0},
        {Categoria: "Industrial", Tipo: 15, cantidad_llenos: 0, cantidad_vacios: 0},
        {Categoria: "Industrial", Tipo: 18, cantidad_llenos: 0, cantidad_vacios: 0}
    ];
    $scope.bode_general = listaStock.query({},function (data) {
        data.forEach(function (bode, i) {
           if (bode.cilindro.categoria.nombre == 'Cilindro' && bode.cilindro.tipo.peso == 15)
           {
               $scope.general[0].cantidad_llenos += bode.cantidad_total_llenos;
               $scope.general[0].cantidad_vacios += bode.cantidad_total_vacios;
           }
           else if (bode.cilindro.categoria.nombre == 'Cilindro' && bode.cilindro.tipo.peso == 18)
           {
               $scope.general[1].cantidad_llenos += bode.cantidad_total_llenos;
               $scope.general[1].cantidad_vacios += bode.cantidad_total_vacios;
           }
           else if (bode.cilindro.categoria.nombre == 'Cilindro' && bode.cilindro.tipo.peso == 45)
           {
               $scope.general[2].cantidad_llenos += bode.cantidad_total_llenos;
               $scope.general[2].cantidad_vacios += bode.cantidad_total_vacios;
           }
           else if (bode.cilindro.categoria.nombre == 'Cilindro' && bode.cilindro.tipo.peso == 15)
           {
               $scope.general[3].cantidad_llenos += bode.cantidad_total_llenos;
               $scope.general[3].cantidad_vacios += bode.cantidad_total_vacios;
           }
           else if (bode.cilindro.categoria.nombre == 'Cilindro' && bode.cilindro.tipo.peso == 18)
           {
               $scope.general[4].cantidad_llenos += bode.cantidad_total_llenos;
               $scope.general[4].cantidad_vacios += bode.cantidad_total_vacios;
           }
        });
    });



});
