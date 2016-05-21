var app = angular.module("inprovec",['ngMaterial', 'ui.router', 'ngResource', 'md.data.table']);


app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('blue')
        .warnPalette('deep-orange')
        .backgroundPalette('grey');
});

app.config(function($stateProvider, $urlRouterProvider, $interpolateProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('vendedor_index',{
            url: '/vendedor/',
            templateUrl: 'templates/Vendedor/index.html',
            controller: 'VendedorIndexCtrl'
        })

});