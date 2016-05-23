var app = angular.module("inprovec");

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('puntoVenta_index',{
            url: '/puntoVenta/',
            templateUrl: 'templates/punto_venta/index.html',
            controller: 'PuntoVentaIndexCtrl'
        })

});
