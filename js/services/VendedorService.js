
var app = angular.module("inprovec");

app.factory('listaVendedor',listaVendedor);

listaVendedor.$inject =['$resource'];

function listaVendedor($resource) {

    return $resource('http://api-ing.herokuapp.com/vendedores/:id',{},{
        'update':{
            method: 'PATCH'
        }
    })
}