var app = angular.module("inprovec",['ngMaterial', 'ui.router', 'ngResource', 'md.data.table', 'LocalStorageModule']);


app.config(function($mdThemingProvider, $httpProvider, $resourceProvider, localStorageServiceProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('blue')
        .warnPalette('deep-orange')
        .backgroundPalette('grey');

    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
    $resourceProvider.defaults.stripTrailingSlashes = false;

    localStorageServiceProvider.setPrefix('User');

});

app.run(function ($rootScope, localStorageService, $state) {
    $rootScope.ruta = 'http://api-ing.herokuapp.com';
    $rootScope.usuario = localStorageService.get('User')
    $rootScope.inicio = function () {
        if (!$rootScope.usuario){
            $state.go('login');
            $rootScope.ver = false
        }else{
            $rootScope.ver = true
        }
    };
});