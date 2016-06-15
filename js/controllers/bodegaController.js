var app = angular.module('inprovec');

app.controller('BodegaIndexCtrl', function ($mdEditDialog, $q, $scope, listaStock, listaRespaldo, Toast, $mdDialog) {
    $scope.inicio()
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

    $scope.puntos = [
        {Categoria: "Cilindro", Tipo: 15, cantidad_llenos: 0, cantidad_vacios: 0},
        {Categoria: "Cilindro", Tipo: 18, cantidad_llenos: 0, cantidad_vacios: 0},
        {Categoria: "Cilindro", Tipo: 45, cantidad_llenos: 0, cantidad_vacios: 0},
        {Categoria: "Industrial", Tipo: 15, cantidad_llenos: 0, cantidad_vacios: 0},
        {Categoria: "Industrial", Tipo: 18, cantidad_llenos: 0, cantidad_vacios: 0}
    ];

    listaStock.query({},function (data) {
        data.forEach(function (bode) {
            bodegas_general(bode);
            if (bode.punto_expendio.id != 1){
                bodegas_punto(bode)
            }
        });
    });

    function bodegas_general (bode){
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
        else if (bode.cilindro.categoria.nombre == 'Industrial' && bode.cilindro.tipo.peso == 15)
        {
            $scope.general[3].cantidad_llenos += bode.cantidad_total_llenos;
            $scope.general[3].cantidad_vacios += bode.cantidad_total_vacios;
        }
        else if (bode.cilindro.categoria.nombre == 'Industrial' && bode.cilindro.tipo.peso == 18)
        {
            $scope.general[4].cantidad_llenos += bode.cantidad_total_llenos;
            $scope.general[4].cantidad_vacios += bode.cantidad_total_vacios;
        }
    }
    function bodegas_punto (bode){
        if (bode.cilindro.categoria.nombre == 'Cilindro' && bode.cilindro.tipo.peso == 15)
        {
            $scope.puntos[0].cantidad_llenos += bode.cantidad_total_llenos;
            $scope.puntos[0].cantidad_vacios += bode.cantidad_total_vacios;
        }
        else if (bode.cilindro.categoria.nombre == 'Cilindro' && bode.cilindro.tipo.peso == 18)
        {
            $scope.puntos[1].cantidad_llenos += bode.cantidad_total_llenos;
            $scope.puntos[1].cantidad_vacios += bode.cantidad_total_vacios;
        }
        else if (bode.cilindro.categoria.nombre == 'Cilindro' && bode.cilindro.tipo.peso == 45)
        {
            $scope.puntos[2].cantidad_llenos += bode.cantidad_total_llenos;
            $scope.puntos[2].cantidad_vacios += bode.cantidad_total_vacios;
        }
        else if (bode.cilindro.categoria.nombre == 'Industrial' && bode.cilindro.tipo.peso == 15)
        {
            $scope.puntos[3].cantidad_llenos += bode.cantidad_total_llenos;
            $scope.puntos[3].cantidad_vacios += bode.cantidad_total_vacios;
        }
        else if (bode.cilindro.categoria.nombre == 'Industrial' && bode.cilindro.tipo.peso == 18)
        {
            $scope.puntos[4].cantidad_llenos += bode.cantidad_total_llenos;
            $scope.puntos[4].cantidad_vacios += bode.cantidad_total_vacios;
        }
    }

});
