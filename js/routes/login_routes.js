var app = angular.module("inprovec");

app.config(function($stateProvider) {
    $stateProvider
        .state('login',{
            url: '/login/',
            templateUrl: 'templates/control_acceso/login.html',
            controller: 'inicio'
        })

});
