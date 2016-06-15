var app = angular.module("inprovec");

app.factory('listaVendedor',listaVendedor);
app.factory('Vendedores',Vendedores);

listaVendedor.$inject =['$resource', '$rootScope'];
Vendedores.$inject =['$resource', '$rootScope'];

function listaVendedor($resource, $rootScope) {

    return $resource($rootScope.ruta + '/vendedores/:id/',{},{
        update:{
            method: 'PUT'
        }
    })
}
function Vendedores($resource, $rootScope) {

    return $resource($rootScope.ruta + '/vendedores/:id/',{},{
        get:{
            isArray: true
        }
    })
}