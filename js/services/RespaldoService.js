var app = angular.module("inprovec");

app.factory('listaRespaldo',listaRespaldo);

listaRespaldo.$inject =['$resource', '$rootScope'];

function listaRespaldo($resource, $rootScope) {
    return $resource($rootScope.ruta + '/respaldo/:id/')
}