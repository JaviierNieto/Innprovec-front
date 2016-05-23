var app = angular.module('inprovec');
app.factory('MenuService', function() {
    var _views = [
            {label:'Punto de Expendio', icon: 'people', separator: false, ui: 'puntoVenta_index'},
            {label:'Vendedores', icon: 'person', separator: false, ui: 'vendedor_index'},
            {label:'Ventas', icon: 'add_shopping_cart', separator: false, ui: 'venta'},
            {label:'Bodega', icon: 'store_mall_directory', separator: false, ui: 'bodega'}
        ],
        _current = 'Clientes';

    function _getViews() {
        return _views;
    }

    function _getCurrent() {
        return _current;
    }

    function _setCurrent(current) {
        _current = current
    }

    return {
        getViews: _getViews,
        getCurrent: _getCurrent,
        setCurrent: _setCurrent
    };
});
