var app = angular.module("inprovec");

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('puntoVenta_index',{
            url: '/puntoVenta/',
            templateUrl: 'templates/Punto_venta/index.html',
            controller: 'PuntoVentaIndexCtrl'
        })

});
