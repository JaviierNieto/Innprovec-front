var app = angular.module("inprovec");

app.factory('listaDepartamento',listaDepartamento);

listaDepartamento.$inject =['$resource', '$rootScope'];

function listaDepartamento($resource, $rootScope) {

    return $resource($rootScope.ruta + '/departamentos/:id',{},{
        'update':{
            method: 'PATCH'
        }
    })
}
