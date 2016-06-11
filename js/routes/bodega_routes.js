var app = angular.module("inprovec");

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/bodega/");
    $stateProvider
        .state('bodega_index',{
            url: '/bodega/',
            templateUrl: 'templates/bodega/index.html',
            controller: 'BodegaIndexCtrl'
        })
});
