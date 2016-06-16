var app = angular.module('inprovec');

app.controller('VentaIndexCtrl', function ($mdEditDialog, $scope, listaVenta, listaDetalle) {
    $scope.inicio()
    $scope.selected = [];

    $scope.options = {
        autoSelect: true,
        vendedor: false,
        mes: false,
        puntoEx: false,
        fecha: false
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

app.controller('VentaCreateCtrl', function ($mdEditDialog, $scope, listaVenta, Vendedores, listaPuntoVenta, Toast) {
    $scope.inicio()
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
        Vendedores.get({'cedula': $scope.vendedor.cedula}, function (data) {
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

    function fechas(){
        try{
            $scope.venta.fecha = $scope.venta.fecha.getFullYear()+"-"+($scope.venta.fecha.getMonth() + 1)+"-"+$scope.venta.fecha.getDate()
        }catch (e){console.log(e)}
    }

    $scope.guardar = function () {
        $scope.crear_venta();
        fechas()
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
app.controller('VentaSearchCtrl', function ($mdEditDialog, $scope, Ventas, Toast) {
    $scope.inicio()
    $scope.search = {};
    $scope.exito = false;

    $scope.$watch('options.vendedor',function (data) {
        try {
            $scope.search.Cedula_Vendedor = null
        }catch (e){

        }
    })

    $scope.$watch('options.puntoEx',function (data) {
        try {
            $scope.search.Nit_punto_expendio = null
        }catch (e){

        }
    })

    $scope.$watch('options.fecha',function (data) {
        try {
            $scope.fecha.fecha = null
        }catch (e){

        }
    })

    $scope.$watch('options.fecha_mayor',function (data) {
        try {
            $scope.fecha.fecha_inicial = null
        }catch (e){

        }
    })

    $scope.$watch('options.fecha_menor',function (data) {
        try {
            $scope.fecha.fecha_final = null
        }catch (e){

        }
    })

    $scope.$watch('options.precio_mayor',function (data) {
        try {
            $scope.search.mayor_venta = null
        }catch (e){

        }
    })

    $scope.$watch('options.precio_menor',function (data) {
        try {
            $scope.search.menor_venta = null
        }catch (e){

        }
    })

    $scope.filtar = function () {
        console.log($scope.search)
        fechas()
        Ventas.get($scope.search, function (data) {
            $scope.ventas = data;
            $scope.exito = true;
        })
    }

    function fechas(){
        try{
            $scope.search.fecha = $scope.fecha.fecha.getFullYear()+"-"+($scope.fecha.fecha.getMonth() + 1)+"-"+$scope.fecha.fecha.getDate()
        }catch (e){console.log(e)}

        try{
            $scope.search.fecha_menor = $scope.fecha.fecha_menor.getFullYear()+"-"+($scope.fecha.fecha_menor.getMonth() + 1)+"-"+$scope.fecha.fecha_menor.getDate()
        }catch (e){console.log(e)}

        try{
            $scope.search.fecha_mayor = $scope.fecha.fecha_mayor.getFullYear()+"-"+($scope.fecha.fecha_mayor.getMonth() + 1)+"-"+$scope.fecha.fecha_mayor.getDate()
        }catch (e){console.log(e)}
    }

    $scope.atras = function () {
        $scope.exito = false;
        $scope.search = {}
        $scope.options = {}
        $scope.ventas = []
    }
});