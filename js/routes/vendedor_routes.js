var app = angular.module("inprovec");

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('vendedor_index',{
            url: '/vendedor/',
            templateUrl: 'templates/Vendedor/index.html',
            controller: 'VendedorIndexCtrl'
        })
        .state('vendedor_create',{
            url: '/vendedor/create/',
            templateUrl: 'templates/Vendedor/_formVend.html',
            controller: 'VendedorCreateCtrl'
        })
        .state('vendedor_update',{
            url: '/vendedor/:id/edit/',
            templateUrl: 'templates/Vendedor/_formVend.html',
            controller: 'VendedorUpdateCtrl'
        })
});