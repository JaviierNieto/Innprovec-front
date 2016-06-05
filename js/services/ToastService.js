var app = angular.module('inprovec');

app.service('Toast',function ($mdToast) {

    this.Mensaje = function (mensaje) {
        $mdToast.show(
            $mdToast.simple()
                .textContent(mensaje)
                .position('bottom right')
                .hideDelay(6000)
        );
    };

});