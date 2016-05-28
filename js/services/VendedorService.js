var app = angular.module("inprovec");

app.factory('listaVendedor',listaVendedor);

listaVendedor.$inject =['$resource', '$rootScope'];

function listaVendedor($resource, $rootScope) {

    return $resource($rootScope.ruta + '/vendedores/:id/',{},{
        'update':{
            method: 'PATCH'
        }
    })
}