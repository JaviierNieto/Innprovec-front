var app = angular.module("inprovec");

app.factory('listaVenta',listaVenta);
app.factory('listaDetalle',listaDetalle);
app.factory('Ventas',Ventas);

listaVenta.$inject =['$resource', '$rootScope'];
listaDetalle.$inject = ['$resource', '$rootScope'];
Ventas.$inject = ['$resource', '$rootScope'];

function listaVenta($resource, $rootScope) {

    return $resource($rootScope.ruta + '/ventas/:id/',{},{
        update:{
            method: 'PUT'
        }
    })
}
function Ventas($resource, $rootScope) {

    return $resource($rootScope.ruta + '/ventas/:id/',{},{
        get: {
            isArray:true
        }
    })
}
function listaDetalle($resource, $rootScope) {
    return $resource($rootScope.ruta + '/detalles_ventas/:id/',{},{
        update:{
            method: 'PUT'
        },
        get: {
            isArray: true
        }
    })
}