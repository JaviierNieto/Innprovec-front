var app = angular.module("inprovec",['ngMaterial', 'ui.router', 'ngResource', 'md.data.table']);


app.config(function($mdThemingProvider, $httpProvider, $resourceProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('blue')
        .warnPalette('deep-orange')
        .backgroundPalette('grey');
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
    $resourceProvider.defaults.stripTrailingSlashes = false;
});

app.run(function ($rootScope) {
    $rootScope.ruta = 'http://api-ing.herokuapp.com/';
});