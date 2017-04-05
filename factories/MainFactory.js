(function() {
  'use strict'
  
  angular
        .module('scotchApp')
        .factory('MainFactory', MainFactory)

    MainFactory.$inject = ['$http', '$rootScope', '$routeParams']

    function MainFactory($http, $rootScope, $routeParams) {

        return {
            getCountries:getCountries,
            getCountry:getCountry
        };

        function getCountries() {
            var url = 'https://restcountries.eu/rest/v2/all';
            return $http.get(url)
                .then(getResults)
                .then(getCountriesData)
          }
        }

        function getCountry(countryName) {
            //let userId = $rootScope.loggedUser.id;
            var url = `https://restcountries.eu/rest/v2/name/${countryName}`;
            return $http.get(url);
        }

       

    ///// Helper functions to filter result
        function getResults (response) {
            return response.data
        }

        function getCountriesData(response) {
            return response.map(function(elem) {
                var countriesInfo = {
                    //id: elem.id,
                    name: elem.name,
                    lat: elem.latlng[0],
                    long: elem.latlng[1],
                    flag: elem.flag
                };
                return countriesInfo
            })
        }
})()
