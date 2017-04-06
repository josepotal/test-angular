(function() {
    'use strict'
    angular
    
        .module('scotchApp')
        .controller('mainController', mainController);

        mainController.$inject = ['$scope', '$route', 'MainFactory'];

    function mainController($scope, $route, MainFactory) {
        $scope.message = 'Ejemplo sencillo para comprobaciones';

        $scope.locations = MainFactory.locationsList;

        //random default starting values
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        var randNum = getRandomInt(0,$scope.locations.length);
        $scope.nameSelected = $scope.locations[randNum].name;
        $scope.imgSelected = $scope.locations[randNum].img;
        $scope.latSelected = $scope.locations[randNum].lat;
        $scope.longSelected = $scope.locations[randNum].long;

        // After selecting a location
        $scope.getLocation = function(event, location){
            $scope.nameSelected = location.name;
            $scope.imgSelected = location.img;
            $scope.latSelected = location.lat;
            $scope.longSelected = location.long;
        };

    }
})();