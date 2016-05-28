var app = angular.module("inprovec");

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('vendedor_create',{
            url: '/vendedor/',
            templateUrl: 'templates/Vendedor/_formVend.html',
            controller: 'VendedorIndexCtrl'
        })

});
