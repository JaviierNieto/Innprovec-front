var app = angular.module('inprovec');

app.controller('VentaIndexCtrl', function ($mdEditDialog, $scope, listaVenta, listaDetalle) {

    $scope.selected = [];

    $scope.options = {
        autoSelect: true
    };

    $scope.query = {
        order: 'nombres',
        limit: 8,
        page: 1
    };

    $scope.ventas = listaVenta.query();
    $scope.detalle = listaDetalle.query();


    $scope.$watch('selected[0].id', function (data) {
        $scope.detalles = [];
        try {
            if ($scope.selected[0].id > 0) {
                $scope.detalle.forEach(function (data) {
                    if (data.venta.id == $scope.selected[0].id) $scope.detalles.push(data)
                })
            }
        }
        catch (err) {
        }
    });

});

app.controller('VentaCreateCtrl', function ($mdEditDialog, $scope, listaVenta, listaVendedor, listaPuntoVenta, Toast) {
    vendedor = {};


    $scope.cilindros = [
        {categoria: 'Cilindro', tipo: 15, cilindro: 1, precio_unitario: 0, cantidad: 0, total: 0},
        {categoria: 'Cilindro', tipo: 18, cilindro: 2, precio_unitario: 0, cantidad: 0, total: 0},
        {categoria: 'Cilindro', tipo: 45, cilindro: 3, precio_unitario: 0, cantidad: 0, total: 0},
        {categoria: 'Industrial', tipo: 15, cilindro: 4, precio_unitario: 0, cantidad: 0, total: 0},
        {categoria: 'Industrial', tipo: 18, cilindro: 5, precio_unitario: 0, cantidad: 0, total: 0}
    ];


    $scope.$watch('vendedor.cedula', function (data) {
        try {
            $scope.vendedor.nombres = null;
            $scope.vendedor.telefono = null;
            $scope.vendedor.id = null;
            $scope.vendedor_encontrado = false;
        } catch (e) {

        }
    });

    $scope.$watch('punto.nit', function (data) {
        try {
            $scope.punto.direccion = null;
            $scope.punto.ciudad = null;
            $scope.punto.id = null;
            $scope.punto_encontrado = false;
        } catch (e) {

        }
    });

    $scope.$watchCollection('cilindros', function (newValue, oldValue) {

    });

    $scope.buscar_vendedor = function () {
        listaVendedor.get({'cedula': $scope.vendedor.cedula}, function (data) {
            if (data[0] != undefined) {
                $scope.vendedor.nombres = data[0].nombres;
                $scope.vendedor.telefono = data[0].telefono;
                $scope.vendedor.id = data[0].id;
                $scope.vendedor_encontrado = true;
            } else {
                Toast.Mensaje('vendedor no encontrado');
            }
        });
    };

    $scope.buscar_punto = function () {
        listaPuntoVenta.get({'nit': $scope.punto.nit}, function (data) {
            if (data[0] != undefined) {
                $scope.punto.nombre = data[0].nombre;
                $scope.punto.direccion = data[0].direccion;
                $scope.punto.id = data[0].id;
                $scope.punto_encontrado = true;
            } else {
                Toast.Mensaje('Punto no encontrado');
            }
        });
    };

    $scope.venta = {};
    $scope.venta.cilindros = [];

    $scope.validado = function () {
        return ($scope.venta.vendedor != undefined && $scope.venta.punto_expendio != undefined &&
        $scope.venta.cilindros.length > 0);
    };
    

    $scope.venta.total = 0;

    $scope.crear_venta = function () {
        $scope.venta.punto_expendio = $scope.punto.id;
        $scope.venta.vendedor = $scope.vendedor.id;

        $scope.cilindros.forEach(function (data) {
            if (data.cantidad > 0 && data.precio_unitario > 0) {
                $scope.venta.cilindros.push({
                    cilindro: data.cilindro, cantidad: data.cantidad,
                    precio_unitario: data.precio_unitario
                });
                $scope.venta.total += (data.cantidad * data.precio_unitario)
            }
        })

    };

    $scope.guardar = function () {
        $scope.crear_venta();
        if ($scope.validado()) {
            listaVenta.save($scope.venta, function (data) {
                Toast.Mensaje('Venta Creada');
            }, function (err) {
                Toast.Mensaje('Error al Crear Venta');
            })
        } else {
            Toast.Mensaje('Datos Invalidos')
        }
    }

    

});