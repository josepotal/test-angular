(function() {
    'use strict'
    angular
    
        .module('scotchApp')
        .controller('mainController', mainController)

        mainController.$inject = ['$scope', '$route', 'MainFactory']

    function mainController($scope, $route, MainFactory) {
        //var vm = this;
        $scope.message = 'Ejemplo sencillo para comprobaciones';

        $scope.locations = MainFactory.locationsList

        //default starting values
        $scope.nameSelected = $scope.locations[0].name
        $scope.imgSelected = $scope.locations[0].img
        $scope.latSelected = $scope.locations[0].lat
        $scope.longSelected = $scope.locations[0].long

        // After selecting a location
        $scope.getLocation = function(event, location){
            $scope.nameSelected = location.name
            $scope.imgSelected = location.img
            $scope.latSelected = location.lat
            $scope.longSelected = location.long
        };

    }
})();