(function() {
    'use strict'
    angular
    
        .module('scotchApp')
        .controller('contactController', contactController)

        contactController.$inject = ['$scope', '$route']

    function contactController($scope, $route) {
        //var vm = this;
        $scope.message = 'Vista de contacto';
    }
})();