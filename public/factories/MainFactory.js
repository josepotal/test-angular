(function() {
  'use strict';
  
  angular
        .module('scotchApp')
        .factory('MainFactory', MainFactory);

    MainFactory.$inject = ['$http', '$rootScope', '$routeParams'];

    function MainFactory($http, $rootScope, $routeParams) {

        //list of locations chosen
        function locationsList () {
           return $http.get('/locationsList')
                .then( ({ data }) => data);
        }
    
        return {
          locationsList: locationsList
        };

    }
})();
