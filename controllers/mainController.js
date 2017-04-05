(function() {
    'use strict'
    angular
    
        .module('scotchApp')
        .controller('mainController', mainController)

        mainController.$inject = ['$scope', '$route', 'MainFactory']

    function mainController($scope, $route, MainFactory) {
        //var vm = this;
        $scope.message = 'Ejemplo sencillo para comprobaciones';

        MainFactory.getCountries()
          .then(function(response){
              $scope.allCountries = response
          })


    }
})();