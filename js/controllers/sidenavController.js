
var app = angular.module('inprovec');

app.controller('sidenavCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.toggleLeft = buildDelayedToggler('left');
        $scope.isOpenRight = function(){
            return $mdSidenav('right').isOpen();
        };

        function debounce(func, wait, context) {
            var timer;
            return function debounced() {
                var context = $scope,
                    args = Array.prototype.slice.call(arguments);
                $timeout.cancel(timer);
                timer = $timeout(function() {
                    timer = undefined;
                    func.apply(context, args);
                }, wait || 10);
            };
        }

        function buildDelayedToggler(navID) {
            return debounce(function() {
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            }, 200);
        }
    })
    .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log, MenuService) {
        $scope.views = MenuService.getViews();
        $scope.currentView = MenuService.getCurrent();

        $scope.toggleMainMenu = function() {
            $mdSidenav('left').toggle();
        };

        $scope.changeView = function(view) {
            MenuService.setCurrent(view);
            $scope.currentView = view;
            $scope.toggleMainMenu();
        }

    });