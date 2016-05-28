var app = angular.module("inprovec");

app.factory('listaCiudad',listaCiudad);

listaCiudad.$inject =['$resource', '$rootScope'];

function listaCiudad($resource, $rootScope) {

    return $resource($rootScope.ruta + '/ciudades/:id',{},{
        get:{
            isArray:true
        }
    })
}
