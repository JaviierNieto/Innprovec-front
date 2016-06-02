var app = angular.module("inprovec");

app.factory('listaPuntoVenta',listaPuntoVenta);
app.factory('listaStock',listaStock);

listaPuntoVenta.$inject =['$resource', '$rootScope'];
listaStock.$inject =['$resource', '$rootScope'];

function listaPuntoVenta($resource, $rootScope) {
    return $resource($rootScope.ruta + '/puntos_expendio/:id/',{},{
        update:{
            method: 'PUT'
        }
    })
}
function listaStock($resource, $rootScope) {
    return $resource($rootScope.ruta + '/stocks/:id/',{},{
        update:{
            method: 'PUT'
        },
        get: {
            isArray: true
        }
    })
}