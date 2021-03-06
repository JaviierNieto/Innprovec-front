var app = angular.module("inprovec");

app.config(function($stateProvider) {
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
        .state('venta_search',{
            url: '/venta/search',
            templateUrl: 'templates/venta/_formSearch.html',
            controller: 'VentaSearchCtrl'
        })

});
