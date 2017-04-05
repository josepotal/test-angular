(function() {
  'use strict'
  
  angular
        .module('scotchApp')
        .factory('MainFactory', MainFactory)

    MainFactory.$inject = ['$http', '$rootScope', '$routeParams']

    function MainFactory($http, $rootScope, $routeParams) {


        //list of locations chosen
        var locationsList = [
            {
                "id":"0",
                "name": "Barcelona",
                "lat": "41.3850639",
                "long": "2.1734035",
                "img": "https://www.sixt.es/fileadmin/files/global/user_upload/pictures-city-page/barcelona-citypage-1.jpg"
            },
            {
                "id":"1",
                "name": "Ciudad de México",
                "lat": "19.404768",
                "long": "-99.139544",
                "img": "https://www.mexicocity.com/media/img/mexico/main_page/front_activity1.jpg"
            },
            {
                "id":"2",
                "name": "Sant Martí de Tous",
                "lat": "41.551008",
                "long": "1.500677",
                "img": "http://www.ayuntamiento.org/fotos/ayuntamiento-sant-marti-de-tous-22173988.jpg"
            },
            {
                "id":"3",
                "name": "Xalapa",
                "lat": "19.536212",
                "long": "-96.907227",
                "img": "http://k33.kn3.net/taringa/8/6/7/C/1/2/JulioCesar06/E47.jpg"
            },
            {
                "id":"4",
                "name": "Stockholm",
                "lat": "59.333911",
                "long": "18.067276",
                "img": "http://blog.secretescapes.com/wp-content/uploads/2015/07/stockholm.jpg"
            },
            {
                "id":"5",
                "name": "Prague",
                "lat": "50.083508",
                "long": "14.423309",
                "img": "https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2d/fb/prague.jpg"
            }
        ];
    
        return {
          locationsList: locationsList
        };

    }
})()
