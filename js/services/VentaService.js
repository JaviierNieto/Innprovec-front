var app = angular.module("inprovec");

app.factory('listaVenta',listaVenta);
app.factory('listaDetalle',listaDetalle);

listaVenta.$inject =['$resource', '$rootScope'];
listaDetalle.$inject = ['$resource', '$rootScope'];

function listaVenta($resource, $rootScope) {

    return $resource($rootScope.ruta + '/ventas/:id/',{},{
        update:{
            method: 'PUT'
        }
    })
}
function listaDetalle($resource, $rootScope) {
    return $resource($rootScope.ruta + '/detalle_ventas/:id/',{},{
        update:{
            method: 'PUT'
        },
        get: {
            isArray: true
        }
    })
}