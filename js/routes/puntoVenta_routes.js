var app = angular.module("inprovec");

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('puntoVenta_index',{
            url: '/puntoVenta/',
            templateUrl: 'templates/puntoVenta/index.html',
            controller: 'PuntoVentaIndexCtrl'
        })
        .state('puntoVenta_create',{
            url: '/punto/create/',
            templateUrl: 'templates/puntoVenta/_formPunt.html',
            controller: 'PuntoVentaCreateCtrl'
        })
        .state('puntoVenta_update',{
            url: '/punto/:id/edit/',
            templateUrl: 'templates/puntoVenta/_formPunt.html',
            controller: 'PuntoVentaUpdateCtrl'
        })

});
