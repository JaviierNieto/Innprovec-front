var app = angular.module("inprovec");

app.config(function($stateProvider) {
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
            templateUrl: 'templates/puntoVenta/_formPuntUpdate.html',
            controller: 'PuntoVentaUpdateCtrl'
        })
        .state('puntoVenta_update_stock',{
            url: '/stock/:id/edit/',
            templateUrl: 'templates/puntoVenta/_formStock.html',
            controller: 'PuntoVentaUpdateStockCtrl'
        })

});
