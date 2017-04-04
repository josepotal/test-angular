(function() {
    'use strict'
    angular
    
        .module('scotchApp')
        .controller('mainController', mainController)

        mainController.$inject = ['$scope', '$route']

    function mainController($scope, $route) {
        //var vm = this;
        $scope.message = 'Ejemplo sencillo para comprobaciones';
    }
})();