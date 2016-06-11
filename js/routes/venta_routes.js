var app = angular.module("inprovec");

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('venta_index',{
            url: '/venta/',
            templateUrl: 'templates/venta/index.html',
            controller: 'VentaIndexCtrl'
        })
        .state('venta_create',{
            url: '/venta/create',
            templateUrl: 'templates/venta/_formVenta.html',
            controller: 'VentaCreateCtrl'
        })

});
