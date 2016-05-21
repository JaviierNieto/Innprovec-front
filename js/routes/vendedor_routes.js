var app = angular.module("inprovec");

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('vendedor_index',{
            url: '/vendedor/',
            templateUrl: 'templates/Vendedor/index.html',
            controller: 'VendedorIndexCtrl'
        })

});