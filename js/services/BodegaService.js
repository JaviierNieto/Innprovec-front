var app = angular.module("inprovec");

app.factory('listaBodega',listaBodega);

listaBodega.$inject =['$resource', '$rootScope'];

function listaBodega($resource, $rootScope) {

    return $resource($rootScope.ruta + '/cilindros/:id',{},{
        'update':{
            method: 'PATCH'
        }
    })
}