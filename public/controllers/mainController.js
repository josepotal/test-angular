(function() {
    'use strict'
    angular
    
        .module('scotchApp')
        .controller('mainController', mainController);

        mainController.$inject = ['$scope', '$route', 'MainFactory'];

    function mainController($scope, $route, MainFactory) {
        $scope.message = 'Ejemplo sencillo para comprobaciones';

       //Call to the factory 
        MainFactory.locationsList()
            .then(getAllLoactions)
            .then(randomLocation);

            //////Helper functions to treat the data
            // Getting all locations list
            function getAllLoactions(response){
                $scope.locations = response;
                return $scope.locations;
            }
            //to get random default starting values
            function randomLocation (response){
                function getRandomInt(min, max) {
                    return Math.floor(Math.random() * (max - min)) + min;
                }
                var randNum = getRandomInt(0,response.length);
                $scope.nameSelected = response[randNum].name;
                $scope.imgSelected = response[randNum].img;
                $scope.latSelected = response[randNum].lat;
                $scope.longSelected = response[randNum].long;
            }

        // After selecting a location
        $scope.getLocation = function(event, location){
            $scope.nameSelected = location.name;
            $scope.imgSelected = location.img;
            $scope.latSelected = location.lat;
            $scope.longSelected = location.long;
        };

    }
})();