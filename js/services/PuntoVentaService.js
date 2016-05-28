var app = angular.module("inprovec");

app.factory('listaPuntoVenta',listaPuntoVenta);

listaPuntoVenta.$inject =['$resource', '$rootScope'];

function listaPuntoVenta($resource, $rootScope) {
    return $resource($rootScope.ruta + '/puntos_expendio/:id/',{},{
        'update':{
            method: 'PUT'
        }
    })
}